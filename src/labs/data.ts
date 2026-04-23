// Source of truth for laboratorios wa.co.
// Cada lab = caso vitrina (modelo Adrián Sáenz — mostrar antes de vender).
// Agregar nuevos objetos aquí. Slug = URL en /labs/{slug}.

export type LabStatus = "live" | "draft" | "coming-soon";

export type LabKPI = {
  label: string;
  value: string;
  hint?: string;
};

export type LabBlock =
  | { kind: "text"; content: string }
  | { kind: "callout"; title: string; body: string }
  | { kind: "list"; items: string[] };

export type Lab = {
  slug: string;
  status: LabStatus;
  project: string;
  title: string;
  subtitle: string;
  industry: string;
  stack: string[];
  summary: string;
  kpis: LabKPI[];
  blocks: LabBlock[];
  publishedAt: string; // ISO date
};

export const LABS: Lab[] = [
  {
    slug: "tc-chatbot-whatsapp-ia",
    status: "draft",
    project: "TodoCamisas",
    title: "Chatbot WhatsApp con IA para dotaciones B2B",
    subtitle:
      "Un operador de WhatsApp 24/7 que cotiza, rastrea pedidos y derreva a humano cuando importa.",
    industry: "Textil · B2B",
    stack: ["Meta WhatsApp Cloud API", "n8n", "GPT-4o", "Supabase"],
    summary:
      "TodoCamisas recibía decenas de mensajes diarios pidiendo cotización. El equipo humano respondía en 6-12 horas y perdía leads a la competencia. Diseñamos un chatbot con IA que entiende el pedido, cotiza dotaciones completas en segundos y pasa a humano sólo cuando hay algo raro o el cliente lo pide.",
    kpis: [
      { label: "Respuesta promedio", value: "8s", hint: "vs. 6-12h antes" },
      { label: "Leads calificados / mes", value: "+180", hint: "marzo 2026" },
      { label: "Costo por lead", value: "−72%", hint: "vs. base anterior" },
    ],
    blocks: [
      {
        kind: "text",
        content:
          "El reto: WhatsApp era el canal principal pero vivía saturado. Queríamos que el bot no se sintiera bot — que hablara como el equipo.",
      },
      {
        kind: "callout",
        title: "Tesis",
        body:
          "Un agente IA no reemplaza al vendedor — le quita la carga de los primeros 3 mensajes y lo suelta para cerrar.",
      },
      {
        kind: "list",
        items: [
          "Modelo GPT-4o afinado con catálogo real y 500 conversaciones pasadas.",
          "Integración con inventario Supabase para precios vivos.",
          "Hand-off automático a humano por 4 triggers: duda compleja, queja, pedido grande (+$1M COP), cliente VIP.",
          "Dashboard interno para monitorear tasa de hand-off y satisfacción.",
        ],
      },
    ],
    publishedAt: "2026-04-22",
  },
  {
    slug: "nano-banana-thumbnails",
    status: "draft",
    project: "A Lo Profundo",
    title: "Pipeline de thumbnails con Nano Banana + auto-publish",
    subtitle:
      "De 3 horas de Photoshop por video a 30 segundos, manteniendo identidad de marca.",
    industry: "Medios · TikTok",
    stack: ["Nano Banana", "n8n", "Google Drive", "CapCut API"],
    summary:
      "A Lo Profundo publica picks MLB diarios. El cuello de botella era el thumbnail: 3 horas/día diseñando en Photoshop. Construimos una pipeline que usa Nano Banana con prompts templados, el resultado pasa por quality-gate automático y se sube al CMS.",
    kpis: [
      { label: "Tiempo por thumbnail", value: "30s", hint: "vs. 3h" },
      { label: "CTR promedio", value: "+18%", hint: "vs. baseline v1" },
      { label: "Costo mensual", value: "USD $12", hint: "reemplaza diseñador freelance" },
    ],
    blocks: [
      {
        kind: "text",
        content:
          "Clave: el prompt no es estático. Recibe como variables el jugador, el equipo, el tipo de pick y la narrativa del día.",
      },
      {
        kind: "callout",
        title: "Resultado",
        body:
          "3 horas/día liberadas. El operador pasó de diseñar a escribir guiones — que es donde estaba el apalancamiento real.",
      },
    ],
    publishedAt: "2026-04-22",
  },
];

export function getLab(slug: string): Lab | undefined {
  return LABS.find((l) => l.slug === slug);
}

export function getPublishedLabs(): Lab[] {
  return LABS.filter((l) => l.status !== "coming-soon");
}
