import { NextResponse } from 'next/server';

/**
 * API route que recibe el form submission y crea el contacto en Go High Level
 * usando la API v2 (LeadConnector). Esto evita el costo de "Inbound Webhook"
 * trigger en workflows de GHL.
 *
 * Variables de entorno requeridas (server-side, NUNCA exponer al cliente):
 * - GHL_PIT:         Private Integration Token (Settings → Private Integrations)
 * - GHL_LOCATION_ID: ID del location/sub-account de GHL
 *
 * Al crear el contacto con tags: ['lp-delano'], el workflow "Round robin delano"
 * dispara automáticamente porque su trigger es "Contact Tag Added includes 'lp-delano'".
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
  [key: string]: unknown; // las respuestas del formulario (inv_*)
};

// Tag fijo del landing page — el workflow de GHL lo usa como disparador del round-robin
const LP_TAG = 'lp-delano';

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

export async function POST(request: Request) {
  try {
    const body: SubmitPayload = await request.json();

    // Validación básica
    if (!body.firstName || !body.email || !body.phone) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const pit = process.env.GHL_PIT;
    const locationId = process.env.GHL_LOCATION_ID;

    // Modo dev: sin credenciales, log y devolver OK
    if (!pit || !locationId) {
      console.warn(
        '[C5 Elite Submit] GHL_PIT o GHL_LOCATION_ID no configurados. Payload recibido:',
        body
      );
      return NextResponse.json({ ok: true, mode: 'dev_no_credentials' });
    }

    // Tags que se envían a GHL — siempre incluye el tag base + qualification
    const existingTags = Array.isArray(body.tags) ? body.tags : [];
    const tagsForGHL = Array.from(
      new Set([...existingTags, LP_TAG, `qualification:${body.qualification}`])
    );

    // Payload para la API v2 de GHL
    const ghlPayload = {
      locationId,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      source: body.source || 'Landing Page Delano',
      tags: tagsForGHL,
    };

    const ghlRes = await fetch(`${GHL_API_BASE}/contacts/`, {
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
        { ok: false, error: 'GHL contact create failed' },
        { status: 502 }
      );
    }

    const ghlData = await ghlRes.json().catch(() => ({}));
    return NextResponse.json({ ok: true, contactId: ghlData?.contact?.id });
  } catch (e) {
    console.error('[C5 Elite Submit] Error:', e);
    return NextResponse.json(
      { ok: false, error: 'Internal error' },
      { status: 500 }
    );
  }
}
