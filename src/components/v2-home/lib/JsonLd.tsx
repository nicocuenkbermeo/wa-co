export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "wa.co agency",
    legalName: "wa.co Agency",
    url: "https://agency-wa.co",
    logo: "https://agency-wa.co/design-system/assets/logo-wa-escultorico.png",
    description:
      "Agencia de IA enraizada en el Huila. Chatbots de WhatsApp, agentes IA y flujos n8n para PyMEs de Colombia y LATAM.",
    email: "hola@agency-wa.co",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Neiva",
      addressRegion: "Huila",
      addressCountry: "CO",
    },
    areaServed: [
      { "@type": "Country", name: "Colombia" },
      { "@type": "Place", name: "LATAM" },
    ],
    sameAs: [],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "wa.co — Agencia de IA",
    image: "https://agency-wa.co/design-system/assets/logo-wa-escultorico.png",
    "@id": "https://agency-wa.co",
    url: "https://agency-wa.co",
    telephone: "+573163836881",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Neiva",
      addressLocality: "Neiva",
      addressRegion: "Huila",
      postalCode: "410010",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 2.9273,
      longitude: -75.2819,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto cuesta un chatbot de WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan Chatbot Starter: US$600 setup + US$150/mes. Plan flagship Chatbot Pro: US$1,500 setup + US$300/mes — incluye agentes IA con Claude + GPT, cotización automática, router multi-canal y dashboard operativo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda una implementación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De la llamada de 30 min al sistema corriendo en producción: 2 a 4 semanas. Proceso en 5 fases: diagnóstico, mapeo, construcción, lanzamiento e iteración mensual.",
        },
      },
      {
        "@type": "Question",
        name: "¿Atienden fuera de Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Enraizada en el Huila, operamos cross-LATAM. Integraciones con Meta, Stripe, Wompi, Shopify, Pipedrive, HubSpot y cualquier sistema con API abierta.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
