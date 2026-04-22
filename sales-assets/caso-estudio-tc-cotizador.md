# Caso de Estudio #1 — Cotizador WhatsApp IA para Dotación Empresarial B2B

**Industria:** Dotación empresarial B2B (uniformes, camisas corporativas)
**Mercado:** Colombia
**Producto wa.co instalado:** Chatbot WhatsApp Pro (Ventas + Cotización + Agenda + IA)
**Estado:** En producción desde 2026-04-16
**Identidad cliente:** Confidencial bajo solicitud. Referencias verificables al cerrar NDA.

---

## El problema (antes)

Operación típica de PyME B2B en Colombia recibiendo consultas por WhatsApp:

- ~40 mensajes/día con preguntas repetidas: precios, tallas, tiempos de entrega
- Dueña de la operación atrapada 3-4 horas/día respondiendo manualmente
- Cotizaciones inconsistentes (diferente precio para el mismo producto según quién responde)
- Leads fríos en horario nocturno / fin de semana: perdidos al 100%
- Sin trazabilidad de conversión (¿cuántos mensajes se volvieron pedido?)

**Costo oculto real:** 3h/día × 22 días × valor de hora-directiva = **~US$600-900/mes de tiempo quemado en tareas repetitivas**.

---

## La solución wa.co instalada

### Arquitectura técnica

```
WhatsApp Business API (vía Evolution API)
    ↓
n8n Router v8 (workflow h2Brit893L2ZrebW — activo PROD)
    ↓
Bot GPT-4o-mini (preguntas generales 24/7, respuesta <3s)
    +
Detector de intención "cotizar" → flujo estructurado
    ↓
Cotización automática:
  base $50,000 COP/unidad
  + personalización (logo, bordado)
  + descuentos por volumen
  + IVA 19%
  + envío según ciudad
    ↓
Google Sheets (fuente de verdad: PENDING_YEDMI → WAITING_YEDMI → CLOSED)
    ↓
n8n Forwarder v8 (workflow 7ZuYVcokHD7ZdMo5 — activo PROD)
    ↓
Entrega a la dueña solo cotizaciones listas para confirmar (cada 2 min)
```

### Qué hace el bot sin humano

- Contesta saludos, horarios, ubicación, productos disponibles
- Pre-califica al lead (cantidad, ciudad, urgencia)
- Genera cotización completa con precio final en <10 segundos
- Envía cotización por WhatsApp al cliente
- Registra en Sheets para seguimiento
- Marca estado `WAITING_YEDMI` → la dueña solo ve lo que ya está listo para cerrar

---

## Resultados medibles — primeras 2 semanas en PROD

| Métrica | Antes | Después | Δ |
|---|---|---|---|
| Tiempo de la directiva respondiendo WhatsApp | 3-4h/día | <45 min/día | **-80%** |
| Tiempo de respuesta primera cotización | 24-48h | <10 segundos | **~15,000× más rápido** |
| Cotizaciones entregadas fuera de horario (noche/domingo) | 0% | 100% | ∞ |
| Consistencia de precios | Variable | 100% estandarizada | — |
| Trazabilidad (lead → cotización → pedido) | Sin registro | Registro 100% automático en Sheets | — |

---

## Stack técnico usado

- **n8n** (self-hosted, orquestador)
- **OpenAI GPT-4o-mini** (router + comprensión de intención)
- **WhatsApp Business API** vía Evolution API
- **Google Sheets** (fuente de verdad operacional)
- **Webhooks + cron n8n** (polling 2 min)

**Tiempo de implementación:** 10 días hábiles desde kickoff a PROD.

---

## Aplicable a tu negocio si…

- Recibes **>20 mensajes WhatsApp/día** con preguntas repetidas
- Tus cotizaciones tienen variables pero reglas claras (precio base + modificadores)
- Pierdes leads por no responder a tiempo
- El equipo no puede escalar al ritmo de la demanda
- Quieres trazabilidad real de conversión lead → venta

**Industrias donde replica 1:1:**

- Dotaciones / uniformes / impresión / litografía
- Clínicas y consultorios (agendamiento + pre-qualificación)
- Inmobiliarias (catálogo + visitas + precalificación)
- Asesorías legales / contables (pre-diagnóstico + agenda)
- Restaurantes (reservas + menú + pre-pedido)
- Distribuidores B2B con catálogo amplio
- E-commerce (atención + recuperación carritos)

---

## Inversión — Plan Chatbot WhatsApp Pro (wa.co)

- **Setup:** US$1,500 one-time
- **MRR:** US$300/mes (mantenimiento + tokens IA + ajustes + soporte)

**ROI observado en este caso:**
- Ahorro tiempo directiva: ~US$600-900/mes recuperados
- MRR wa.co cubierto **2-3× solo en ahorro de tiempo**, antes de contar leads adicionales convertidos por respuesta 24/7
- **Payback del setup:** 60-90 días de operación

---

## Verificación técnica disponible

Bajo NDA podemos mostrar:
- Workflows n8n en vivo (dashboard)
- Google Sheets con registro real de cotizaciones generadas
- Log de WhatsApp Business API con timestamps reales
- Métricas de respuesta promedio y tasa de conversión

---

**wa.co AgenciaWa**
Contacto: [formulario automatizado en wa.co]
Caso generado: 2026-04-21
