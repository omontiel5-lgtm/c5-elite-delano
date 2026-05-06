# C5 Elite × Delano Residences Miami — Landing

Landing page premium para captar inversionistas internacionales interesados en Delano Residences Miami. Construida con Next.js 14 + Tailwind CSS, deploy en Vercel, datos van a Go High Level vía webhook.

## Stack técnico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + paleta C5 Elite (navy + gold + cream)
- **Tipografía:** Playfair Display (serif) + Inter (sans)
- **Iconos:** Lucide React
- **Animaciones:** Framer Motion + utilidades CSS
- **Hosting:** Vercel
- **Backend de leads:** Go High Level (vía webhook)

## Quick start

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno (copiar .env.example a .env.local y llenar)
cp .env.example .env.local

# 3. Correr en local
npm run dev

# 4. Build de producción
npm run build && npm start
```

## Estructura del proyecto

```
src/
├── app/
│   ├── page.tsx                 ← Landing principal (10 secciones)
│   ├── layout.tsx               ← Root layout con fonts
│   ├── globals.css              ← Estilos globales + paleta C5
│   ├── calificacion/page.tsx    ← Formulario multi-step
│   ├── exito/page.tsx           ← Página post-calificación con calendario GHL
│   ├── gracias-capital/page.tsx ← Despedida A (capital insuficiente)
│   ├── gracias-timing/page.tsx  ← Despedida B (sin urgencia)
│   ├── gracias-info/page.tsx    ← Despedida C (solo busca info)
│   └── api/submit/route.ts      ← Endpoint que manda lead a GHL
│
├── components/
│   ├── layout/Navbar.tsx
│   ├── ui/                      ← Button, SectionHeading
│   ├── sections/                ← Las 10 secciones del landing
│   └── form/QualificationForm.tsx
│
└── lib/
    ├── constants.ts             ← Datos del proyecto + 10 preguntas + lógica calificación
    ├── team.ts                  ← Founders, advisors, process steps
    └── utils.ts                 ← Helper cn()
```

## Variables de entorno

Configurar en Vercel → Project → Settings → Environment Variables:

| Variable | Descripción | Quién la provee |
|---|---|---|
| `GHL_WEBHOOK_URL` | URL del webhook del workflow de calificación en GHL | Mario (técnico GHL) |
| `NEXT_PUBLIC_GHL_CALENDAR_URL` | URL del embed del calendario GHL para la página de éxito | Mario |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Facebook Pixel ID para tracking | Juan (Facebook Ads) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics Measurement ID (opcional) | — |
| `NEXT_PUBLIC_SITE_URL` | URL canónica del sitio | — |

## Las 10 secciones del landing

1. **Hero** — Headline principal + formulario básico (nombre, email, WhatsApp)
2. **Garantías de confianza** — 3 cards: no vendemos en primera llamada / no spam / oficina física
3. **La diferencia C5** — 3 ventajas exclusivas con PMG (calendario extendido / upgrades / acceso prioritario)
4. **Por qué Delano** — Renders, datos del proyecto, Observation Deck, vecindad con Waldorf, ubicación, PMG
5. **Autoridad C5 Global** — Números, medios, íconos mediáticos, Doral
6. **Liderazgo Montiel** — Orlando y Daniel como social proof central
7. **Proceso de 5 pasos** — Cómo compras desde tu país sin ser residente
8. **Equipo dedicado** — Marcela, Ana, Giselle (las 3 asesoras)
9. **Quién califica** — Tabla SÍ / NO (filtro psicológico)
10. **CTA final + Footer** — Repite formulario básico + datos de contacto

## El formulario de calificación

- **Step 1 (en hero/CTA final):** Nombre, Apellido, Email, WhatsApp → guarda en `sessionStorage` y manda a `/calificacion`
- **Step 2 (`/calificacion`):** 10 preguntas multi-step con barra de progreso
- **Final:** llama a `/api/submit` que manda payload a GHL webhook
- **Redirige según calificación:**
  - `qualified` → `/exito` (calendario GHL)
  - `rejected_capital` → `/gracias-capital`
  - `rejected_timing` → `/gracias-timing`
  - `rejected_info` → `/gracias-info`

## Lógica de calificación

Definida en `src/lib/constants.ts` función `evaluateQualification()`. Una pregunta descalifica si:

| Pregunta | Respuesta que descalifica | Categoría |
|---|---|---|
| Q1 (capital) | < $550K USD | `capital` |
| Q2 (estructura) | "Aún estoy estructurando" | `capital` |
| Q4 (timing) | "6 meses o más" | `timing` |
| Q8 (tipo reunión) | "Solo busco información" | `info` |
| Q9 (etapa) | "30-90 días" o "Solo info" | `timing` o `info` |
| Q10 (disponibilidad) | "Necesito más info" o "No disponible" | `info` o `timing` |

## Imágenes que el equipo debe subir

Todos los placeholders están marcados con comentario `Equipo: ...` en el código. Subir a `/public/images/`:

### Hero
- `hero-delano-placeholder.jpg` — render principal de Delano (1920x1080 mín)

### Why Delano
- `delano-render-1.jpg`, `delano-render-2.jpg`, `delano-render-3.jpg` — renders del proyecto (4:5 ratio)
- `observation-deck.jpg` — render del Observation Deck (4:3)
- `waldorf-render.jpg` y `delano-render.jpg` — para comparativa lado a lado (16:9)

### Authority
- `icons/don-francisco.jpg`
- `icons/emilio-estefan.jpg`
- `icons/ignacio-meyer.jpg`
- `icons/margarita-pasos.jpg`
- `icons/maickel-melamed.jpg`
- `doral-mayor.jpg` — Mayor Christi Fraga entregando certificado

### Leadership
- `team/orlando-montiel.jpg`
- `team/daniel-montiel.jpg`
- `events/event-1.jpg` ... `events/event-5.jpg` — fotos de apariciones públicas

### Advisors
- `team/marcela-galvis.jpg`
- `team/ana-vega.jpg`
- `team/giselle-fermin.jpg`

## Deploy a Vercel — Pasos

1. **Crear repo en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[org]/c5-elite-delano.git
   git push -u origin main
   ```

2. **Conectar en Vercel:**
   - vercel.com → Add New Project → Import desde GitHub
   - Framework Preset: Next.js (autodetectado)
   - Configurar variables de entorno (ver tabla arriba)
   - Deploy

3. **Configurar dominio:**
   - Sugerencia: `delano.c5elite.com` o `c5elite.com/delano`
   - Configurar DNS (CNAME a `cname.vercel-dns.com`)

## Checklist de QA antes de lanzar (viernes 8 de mayo)

### Funcionalidad
- [ ] Formulario hero captura datos básicos correctamente
- [ ] Avanza a /calificacion sin perder datos
- [ ] Las 10 preguntas se muestran en orden, con barra de progreso
- [ ] Botón "Atrás" funciona y mantiene respuestas previas
- [ ] Cada uno de los 4 caminos de descalificación redirige correcto
- [ ] Lead calificado llega a /exito y ve el calendario GHL
- [ ] Webhook a GHL recibe payload completo (testear con webhook.site primero)

### Visual
- [ ] Todas las imágenes están subidas (no quedan placeholders)
- [ ] Móvil se ve correcto (probar en iPhone y Android)
- [ ] Tablet se ve correcto (iPad)
- [ ] Desktop 1920px se ve correcto
- [ ] No hay textos cortados ni overflow
- [ ] Gold y navy se ven correctos en todos los browsers

### Tracking
- [ ] Facebook Pixel disparando PageView
- [ ] Pixel disparando Lead al enviar formulario
- [ ] Pixel disparando Schedule cuando agendan en /exito
- [ ] CAPI configurado en GHL para mandar conversiones offline

### Legal / Contenido
- [ ] WhatsApp +1 786-396-5621 está visible y funciona
- [ ] Email info@c5elite.com correcto en footer
- [ ] Disclaimer legal de eXp Realty / Florida visible
- [ ] No hay typos en copy (revisión final por Orlando)

### Performance
- [ ] Lighthouse score >85 en Performance
- [ ] Lighthouse score >95 en Accessibility
- [ ] Lighthouse score >95 en SEO
- [ ] Imágenes optimizadas (WebP cuando sea posible)

## Próximos pasos después del lanzamiento

1. **Automatización WhatsApp en GHL:**
   - Confirmación inmediata al agendar
   - Recordatorio 24h antes
   - Recordatorio 2h antes
   - Llamada del setter 30 min antes

2. **Configuración Pixel + CAPI completa:**
   - Eventos diferenciados con valor monetario
   - Lead-Calificado como Custom Conversion
   - Schedule-Calificado como Custom Conversion
   - Purchase como offline conversion

3. **Lanzamiento campaña Facebook:**
   - Optimización por Schedule (no por Lead)
   - 3 ad sets (Colombia intereses / Colombia amplio / LATAM)
   - 3 ads por ad set (dolarización / leaseback / autoridad)
   - $50/día por ad set inicialmente

## Contacto / dudas técnicas

- **Orlando Montiel** — Decisiones de copy, imágenes, posicionamiento
- **Daniel Montiel** — Validación final de marca
- **Mario** — Configuración GHL, webhook, calendario
- **Juan** — Configuración Pixel, CAPI, campaña Facebook
- **Equipo técnico Vercel** — Deploy, dominio, performance

---

**Versión:** 1.0
**Fecha:** Mayo 6, 2026
**Deadline lanzamiento:** Viernes 8 de Mayo, 2026
