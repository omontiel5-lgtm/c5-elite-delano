import { NextResponse } from 'next/server';

/**
 * API route que recibe el form submission y crea/actualiza el contacto en Go High Level
 * usando la API v2 (LeadConnector) con endpoint /contacts/upsert.
 *
 * Variables de entorno requeridas (server-side, NUNCA exponer al cliente):
 * - GHL_PIT:         Private Integration Token (Settings → Private Integrations)
 * - GHL_LOCATION_ID: ID del location/sub-account de GHL
 *
 * Al crear el contacto con tags: ['lp-delano'], el workflow "Round robin delano"
 * dispara automáticamente porque su trigger es "Contact Tag Added includes 'lp-delano'".
 *
 * Las respuestas del modal (inv_*) se mapean a customFields de GHL por ID interno.
 */

type SubmitPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  qualification: 'qualified' | 'rejected_capital' | 'rejected_timing' | 'rejected_info';
  submittedAt: string;
  source: string;
  tags?: string[];
  [key: string]: unknown;
};

const LP_TAG = 'lp-delano';
const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

// Mapeo de los campos inv_* del modal a los IDs internos de los custom fields de GHL.
// Si renombras o reemplazas un custom field en GHL, hay que actualizar el ID aquí.
const CUSTOM_FIELD_IDS: Record<string, string> = {
  inv_capital:            'QqIBmgbX1i2dBJQdSE2Q',
  inv_estructura_capital: 'LJDqY3vBKZwrUHFF6qug',
  inv_experiencia:        '1LJto519pQZdlhgf76p0',
  inv_timing:             's26jaFxVshks7dePf3Kt',
  inv_objetivo:           'yV3ryROd3HDdMQv0AWxa',
  inv_reto:               'xpQsze1l6ibxiWPUOek4',
  inv_decision:           'ZGljT51D1mckas8LgkHZ',
  inv_tipo_reunion:       'TaK8ddjL9wdhwFZ8Q25Q',
  inv_etapa:              'aM8WSxIpg1ZKqt5D0oiI',
  inv_disponibilidad:     't2YhZjBbexOzuAs4KxYs',
  inv_calificacion:       '1ApnKgwMueJPaAj9OvLh',
};

export async function POST(request: Request) {
  try {
    const body: SubmitPayload = await request.json();

    if (!body.firstName || !body.email || !body.phone) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const pit = process.env.GHL_PIT;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!pit || !locationId) {
      console.warn(
        '[C5 Elite Submit] GHL_PIT o GHL_LOCATION_ID no configurados. Payload recibido:',
        body
      );
      return NextResponse.json({ ok: true, mode: 'dev_no_credentials' });
    }

    const existingTags = Array.isArray(body.tags) ? body.tags : [];
    const tagsForGHL = Array.from(
      new Set([...existingTags, LP_TAG, `qualification:${body.qualification}`])
    );

    // Mapear las respuestas inv_* del modal a customFields con IDs reales.
    const customFields: { id: string; value: string }[] = [];
    for (const [key, id] of Object.entries(CUSTOM_FIELD_IDS)) {
      const value = body[key];
      if (typeof value === 'string' && value.trim().length > 0) {
        customFields.push({ id, value });
      }
    }
    if (!customFields.some((f) => f.id === CUSTOM_FIELD_IDS.inv_calificacion) && body.qualification) {
      customFields.push({
        id: CUSTOM_FIELD_IDS.inv_calificacion,
        value: body.qualification,
      });
    }

    const ghlPayload = {
      locationId,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      source: body.source || 'Landing Page Delano',
      tags: tagsForGHL,
      customFields,
    };

    const ghlRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${pit}`,
        Version: GHL_API_VERSION,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlRes.ok) {
      const errorText = await ghlRes.text();
      console.error('[C5 Elite Submit] GHL API error:', ghlRes.status, errorText);
      return NextResponse.json(
        { ok: false, error: 'GHL contact upsert failed' },
        { status: 502 }
      );
    }

    const ghlData = await ghlRes.json().catch(() => ({}));
    return NextResponse.json({
      ok: true,
      contactId: ghlData?.contact?.id,
      isNew: ghlData?.new,
    });
  } catch (e) {
    console.error('[C5 Elite Submit] Error:', e);
    return NextResponse.json(
      { ok: false, error: 'Internal error' },
      { status: 500 }
    );
  }
}
