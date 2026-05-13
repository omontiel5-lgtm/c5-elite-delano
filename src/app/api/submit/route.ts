import { NextResponse } from 'next/server';

/**
 * API route que recibe el form submission y lo manda a Go High Level via webhook.
 *
 * Variables de entorno requeridas:
 * - GHL_WEBHOOK_URL: URL del webhook del workflow de calificación en GHL
 *
 * El payload incluye:
 * - Datos básicos: firstName, lastName, email, phone
 * - Respuestas del formulario (inv_capital, inv_estructura_capital, ..., inv_disponibilidad)
 * - qualification: 'qualified' | 'rejected_capital' | 'rejected_timing' | 'rejected_info'
 * - submittedAt: ISO timestamp
 * - source: URL desde donde se envió
 * - tags: ['lp-delano', ...] — siempre incluye 'lp-delano' para disparar el workflow
 *
 * GHL workflow debe:
 * 1. Crear/actualizar contacto con los datos básicos
 * 2. Setear los Custom Fields según las respuestas
 * 3. Aplicar tag según qualification (calificado / no califica - capital / timing / info)
 * 4. Si qualification === 'qualified', dispara secuencia de WhatsApp + asignación a setter
 *    via round-robin (trigger: tag 'lp-delano')
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

    // Inyectar tag del LP server-side (garantiza que todo lead lo lleve)
    const existingTags = Array.isArray(body.tags) ? body.tags : [];
    const payload = {
      ...body,
      tags: Array.from(new Set([...existingTags, LP_TAG])),
    };

    const webhookUrl = process.env.GHL_WEBHOOK_URL;

    // Si el webhook no está configurado, log y devolver OK (modo dev)
    if (!webhookUrl) {
      console.warn(
        '[C5 Elite Submit] GHL_WEBHOOK_URL no configurado. Payload recibido:',
        payload
      );
      return NextResponse.json({ ok: true, mode: 'dev_no_webhook' });
    }

    // Mandar al webhook de GHL
    const ghlRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!ghlRes.ok) {
      const errorText = await ghlRes.text();
      console.error('[C5 Elite Submit] GHL webhook error:', errorText);
      return NextResponse.json(
        { ok: false, error: 'GHL webhook failed' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[C5 Elite Submit] Error:', e);
    return NextResponse.json(
      { ok: false, error: 'Internal error' },
      { status: 500 }
    );
  }
}
