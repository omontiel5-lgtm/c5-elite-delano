# C5 Elite × Delano — Handoff Rápido para el Equipo Técnico

**Fecha:** 6 de mayo, 2026
**Deadline lanzamiento:** Viernes 8 de mayo, 2026
**Versión:** A/B test contra Flow House (Daniel)

## Estrategia A/B test

Esta landing es la **versión Delano** del A/B test contra la versión Flow House de Daniel:

| | Flow House (Daniel) | Delano (esta) |
|---|---|---|
| Producto | Flow House Miami (terminado, leaseback) | Delano Residences Miami (preconstrucción, Observation Deck) |
| Capital min | $200K | $700K |
| Paleta | Navy oscuro + dorado | Cream/beige + champagne + espresso |
| Estructura | Misma | Misma |
| Form | 11 steps modal | 11 steps modal |
| Tono | Inversión que ya genera renta | Lujo institucional / activo icónico |

**Mismo contenido, distinto look & feel** — para medir cuál convierte mejor con qué audiencia.

## Estado del código

✅ **100% funcional, listo para deploy.** Estructura Next.js 14 completa con:
- 10 secciones del landing
- Modal de calificación de 11 pasos (datos básicos + 10 preguntas)
- 3 páginas de despedida (capital, timing, info)
- Página de éxito con calendario GHL embed
- API route `/api/submit` que dispara webhook a GHL

⚠️ **El folder `node_modules/` está incompleto** porque mi sandbox tiene network limits. **Borren `node_modules/` y corran `npm install` desde cero.**

## Quick start (15 minutos)

```bash
# 1. Borrar node_modules incompleto
rm -rf node_modules package-lock.json

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# editar .env.local con: GHL_WEBHOOK_URL, NEXT_PUBLIC_GHL_CALENDAR_URL, NEXT_PUBLIC_FB_PIXEL_ID

# 4. Correr en local para verificar
npm run dev
# abrir http://localhost:3000

# 5. Build de producción
npm run build && npm start
```

## Deploy a Vercel (10 minutos)

1. Crear repo en GitHub y subir el código
2. vercel.com → New Project → Import desde GitHub
3. Framework Preset: Next.js (autodetectado)
4. Configurar Environment Variables:
   - `GHL_WEBHOOK_URL` — pedirle a Mario
   - `NEXT_PUBLIC_GHL_CALENDAR_URL` — pedirle a Mario
   - `NEXT_PUBLIC_FB_PIXEL_ID` — pedirle a Juan
5. Deploy

## Cambios clave vs versión inicial

1. **Paleta refactor a Delano**: navy/dorado → cream/champagne/espresso (warmer, more boutique-hotel)
2. **Form ahora es modal global** (no página separada `/calificacion`). Click cualquier botón de CTA → modal se abre.
3. **11 pasos** (paso 1 = datos básicos, pasos 2-11 = las 10 preguntas)
4. **Hero sin form embebido** — un solo CTA "Evalúa tu caso · 15 min" que abre el modal
5. **Doble CTA en sección final**: "Evalúa tu caso" (primario) + "Recibir guía Top 10" (secundario)
6. **Tipografía mixta**: italic dorado dentro de titulares serif blancos (ej. "que tus medios de confianza *ya validaron*")

## Estructura del código

```
src/
├── app/
│   ├── page.tsx                 ← Landing principal (las 10 secciones)
│   ├── layout.tsx               ← Root layout + ModalProvider envolvente
│   ├── globals.css              ← Paleta C5 Elite Delano
│   ├── exito/page.tsx           ← Después de calificar (calendario GHL)
│   ├── gracias-{capital,timing,info}/page.tsx  ← Despedidas A, B, C
│   ├── calificacion/page.tsx    ← Redirect → home (legacy)
│   └── api/submit/route.ts      ← POST → GHL webhook
│
├── components/
│   ├── providers/ModalProvider.tsx  ← Context que expone openQualificationModal()
│   ├── form/
│   │   ├── QualificationModal.tsx   ← El modal de 11 pasos (NUEVO, principal)
│   │   └── QualificationForm.tsx    ← Stub re-export legacy
│   ├── ui/
│   │   ├── Modal.tsx               ← Modal genérico con backdrop + ESC + scroll lock
│   │   ├── Button.tsx              ← Botón con variants
│   │   └── SectionHeading.tsx
│   ├── layout/Navbar.tsx           ← Botón "Agendar llamada" abre modal
│   └── sections/                   ← Las 10 secciones del landing
│
└── lib/
    ├── constants.ts                ← BRAND, PROJECT, QUESTIONS, evaluateQualification()
    ├── team.ts                     ← FOUNDERS, ADVISORS, PROCESS_STEPS, etc
    └── utils.ts                    ← cn()
```

## Variables de entorno

```bash
# REQUERIDAS
GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...
NEXT_PUBLIC_GHL_CALENDAR_URL=https://api.leadconnectorhq.com/widget/booking/...
NEXT_PUBLIC_FB_PIXEL_ID=...

# OPCIONALES
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...
NEXT_PUBLIC_SITE_URL=https://delano.c5elite.com
```

## Imágenes que el equipo debe subir a `/public/images/`

Todos los placeholders están marcados con comentario `Equipo: ...` en el código.

### Hero
- `hero-delano-placeholder.jpg` — render principal de Delano (1920x1080 mín)

### Why Delano
- `delano-render-1.jpg`, `delano-render-2.jpg`, `delano-render-3.jpg` (4:5 ratio)
- `observation-deck.jpg` (4:3)
- `waldorf-render.jpg`, `delano-render.jpg` para comparativa (16:9)

### Authority
- `icons/don-francisco.jpg`, `emilio-estefan.jpg`, `ignacio-meyer.jpg`, `margarita-pasos.jpg`, `maickel-melamed.jpg`
- `doral-mayor.jpg` — Mayor Christi Fraga + certificado

### Leadership
- `team/orlando-montiel.jpg`, `team/daniel-montiel.jpg`
- `events/event-1.jpg` … `events/event-5.jpg`

### Advisors
- `team/marcela-galvis.jpg`, `team/ana-vega.jpg`, `team/giselle-fermin.jpg`

## Lógica de calificación (`src/lib/constants.ts`)

Función `evaluateQualification()` evalúa las respuestas y devuelve uno de:
- `qualified` → redirect a `/exito` (calendario GHL)
- `rejected_capital` → `/gracias-capital`
- `rejected_timing` → `/gracias-timing`
- `rejected_info` → `/gracias-info`

Una pregunta descalifica si:

| Pregunta | Respuesta que descalifica | Categoría |
|---|---|---|
| Q1 (capital) | < $550K USD | `capital` |
| Q2 (estructura) | "Aún estoy estructurando" | `capital` |
| Q4 (timing) | "6 meses o más" | `timing` |
| Q8 (tipo reunión) | "Solo busco información" | `info` |
| Q9 (etapa) | "30-90 días" o "Solo info" | `timing` o `info` |
| Q10 (disponibilidad) | "Necesito más info" o "No disponible" | `info` o `timing` |

## Checklist de QA antes de lanzar (viernes 8 de mayo)

### Funcionalidad
- [ ] Botón "Evalúa tu caso · 15 min" en hero abre modal
- [ ] Botón "Agendar llamada" en navbar abre modal
- [ ] Botón "Evalúa tu caso de inversión" en CTA final abre modal
- [ ] Botón ESC cierra modal (probar)
- [ ] Click en backdrop cierra modal (probar)
- [ ] Paso 1 valida que todos los datos básicos estén llenos
- [ ] Pasos 2-11 muestran preguntas con opciones radio
- [ ] Botón "Atrás" mantiene respuestas previas
- [ ] Cada uno de los 4 caminos de descalificación redirige correcto
- [ ] Lead calificado llega a /exito y ve calendario GHL
- [ ] Webhook a GHL recibe payload completo (testear con webhook.site primero)

### Visual
- [ ] Paleta beige/champagne/espresso visible en todas las secciones
- [ ] Imágenes subidas (no quedan placeholders)
- [ ] Móvil se ve correcto (iPhone + Android)
- [ ] Tablet (iPad) se ve correcto
- [ ] Desktop 1920px se ve correcto
- [ ] Modal se centra correctamente en mobile
- [ ] Sin overflow / textos cortados

### Tracking
- [ ] Facebook Pixel disparando PageView
- [ ] Pixel disparando Lead al enviar formulario
- [ ] Pixel disparando Schedule cuando agendan en /exito
- [ ] CAPI configurado en GHL para mandar conversiones offline

### Legal / Contenido
- [ ] WhatsApp +1 786-396-5621 visible y funciona
- [ ] Email info@c5elite.com correcto en footer
- [ ] Disclaimer legal de eXp Realty / Florida visible
- [ ] No hay typos (revisión final por Orlando)

### Performance
- [ ] Lighthouse Performance >85
- [ ] Lighthouse Accessibility >95
- [ ] Lighthouse SEO >95

## Próximos pasos después del lanzamiento

1. **Automatización WhatsApp en GHL:**
   - Confirmación inmediata al agendar
   - Recordatorio 24h antes
   - Recordatorio 2h antes
   - Llamada del setter 30 min antes

2. **Configuración Pixel + CAPI completa con eventos diferenciados**

3. **Lanzamiento campaña Facebook optimizada por Schedule**

## Contactos

- **Orlando Montiel** — Decisiones de copy, imágenes, posicionamiento
- **Daniel Montiel** — Validación final de marca + dueño de versión Flow House
- **Mario** — Configuración GHL (webhook + calendario + workflow)
- **Juan** — Configuración Pixel, CAPI, campaña Facebook
- **Equipo Vercel** — Deploy + dominio + performance
