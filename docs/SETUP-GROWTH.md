# wa.co — Setup Growth Stack (manual steps)

Guía de los 3 pasos manuales que Nicolas tiene que hacer (requieren login personal que no puedo ejecutar). Duración total: ~15 min.

## 1. Google Search Console (indexación Google)

**Objetivo:** que agency-wa.co salga en Google cuando busquen "agencia IA Huila", "chatbot whatsapp Colombia", etc.

**Pasos:**

1. Abrir https://search.google.com/search-console/
2. Click "Agregar propiedad" → elegir **Dominio** → escribir `agency-wa.co`
3. Google te da un TXT record tipo `google-site-verification=abc123xyz...`
4. Ir a GoDaddy → `agency-wa.co` → DNS Management → Add Record:
   - Type: TXT
   - Name: @
   - Value: `google-site-verification=abc123xyz...` (el que te dio Google)
   - TTL: 600
5. Esperar 5-10 min, volver a Search Console, click "Verificar"
6. Una vez verificado, enviar sitemap: `https://agency-wa.co/sitemap.xml`

**Verificación en Sitemap ya está live:** https://agency-wa.co/sitemap.xml

---

## 2. Meta Pixel (Facebook/Instagram Ads tracking)

**Objetivo:** poder correr campañas en Meta (IG/FB) y medir cuántas personas del ads llegan a agendar llamada.

**Pasos:**

1. Abrir https://business.facebook.com/events_manager2/
2. Click "Conectar datos" → Web → **Meta Pixel** → siguiente
3. Dar nombre: "wa.co agency" → URL: `https://agency-wa.co`
4. Copiar el **Pixel ID** (ej: `1234567890123456`)
5. Ir a Vercel Dashboard → proyecto `wa-co` → Settings → Environment Variables → Add:
   - Key: `NEXT_PUBLIC_META_PIXEL_ID`
   - Value: `1234567890123456` (el tuyo)
   - Environment: **Production, Preview, Development** (las 3)
   - Save
6. Vercel Dashboard → Deployments → último → "Redeploy" (para que tome la env var)
7. Verificar: abrir agency-wa.co, instalar extensión Chrome "Meta Pixel Helper" — debería aparecer el pixel activo.

**El código ya está inyectado en el sitio** — solo falta la env var. Una vez agregada, tracking PageView se dispara automático.

**Events adicionales que ya puedes trackear** (edítalos en `src/components/v2-home/lib/MetaPixel.tsx` si querés):
- `Lead` cuando alguien clickea "Agendar llamada"
- `Contact` cuando clickean WhatsApp
- `ViewContent` cuando abren un caso de estudio

---

## 3. Dominio email (hola@agency-wa.co)

**Objetivo:** que cuando alguien escriba a `hola@agency-wa.co`, llegue a tu inbox.

**Recomendado (gratis): forward con GoDaddy**

1. GoDaddy → `agency-wa.co` → Email & Office → "Forwarding"
2. Forward `hola@agency-wa.co` → `nicocuenkbermeo@gmail.com`
3. Verificar enviando un correo de prueba.

**Opcional premium (US$6/mes): Google Workspace**
- Permite enviar DESDE `hola@agency-wa.co` (no solo recibir). Mejor look profesional.

---

## 4. Domain health check (1 minuto)

Una vez GSC verificado, pegar esto en terminal para verificar todo:

```bash
curl -I https://agency-wa.co
curl https://agency-wa.co/sitemap.xml | head -20
curl https://agency-wa.co/robots.txt
```

Debería responder 200 y mostrar las rutas. Si algo falla, revisar Vercel deployment logs.

---

## 5. Vercel Analytics + Speed Insights (YA ACTIVO)

Ya están conectados en el código (`src/app/layout.tsx`). Se activan solos cuando el proyecto está deployed en Vercel.

**Ver en:** Vercel Dashboard → proyecto `wa-co` → Analytics (tab).

Primera data aparece tras la primera visita. Speed Insights tarda ~1h en acumular muestras.

**Lo que vas a ver:**
- Core Web Vitals en vivo (LCP, CLS, INP)
- Top páginas visitadas
- Countries / devices / browsers
- Conversion events (si los disparamos con `track()`)

---

## 6. Siguiente tramo: primera campaña Meta Ads

Cuando GSC + Pixel estén activos, el playbook para primera campaña $50 USD test:

1. **Objetivo:** Mensaje (WhatsApp) — no conversión, no tráfico. Meta tiene plantilla que abre WhatsApp directo.
2. **Audiencia:** PyMEs Neiva + Colombia, 25-55, intereses "emprendedor", "e-commerce", "marketing digital"
3. **Creative:** 1 video 15s del flujo del bot cotizando (podemos grabar pantalla del chatbot de TC) + 1 imagen estática del lettermark
4. **Copy:** "Tu chatbot de WhatsApp cotiza solo mientras duermes. Desde el Huila. → Mensaje"
5. **Budget:** US$10/día x 5 días = $50 test
6. **KPI:** ≥15 mensajes iniciados por $50. Si menos, iterar creative. Si más, escalar.

Esto lo armamos juntos cuando GSC + Pixel estén activos.
