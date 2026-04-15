"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MessageSquare,
  Cog,
  Smartphone,
  BarChart3,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "Diseño Web",
    description:
      "Landing pages, sitios corporativos y e-commerce que convierten visitantes en clientes",
    icon: Globe,
    featured: true,
  },
  {
    title: "Chatbots IA",
    description:
      "Atención 24/7 en WhatsApp Business con inteligencia artificial",
    icon: MessageSquare,
    featured: false,
  },
  {
    title: "Automatización",
    description:
      "Flujos inteligentes con n8n que eliminan tareas repetitivas",
    icon: Cog,
    featured: false,
  },
  {
    title: "Apps Web",
    description:
      "Aplicaciones web personalizadas con React y Next.js",
    icon: Smartphone,
    featured: false,
  },
  {
    title: "SEO & Analytics",
    description:
      "Optimización para Google y tracking de resultados",
    icon: BarChart3,
    featured: false,
  },
  {
    title: "Branding",
    description:
      "Identidad visual, logos y guidelines de marca",
    icon: Palette,
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-sm uppercase tracking-widest mb-4"
            style={{ color: "#D4A853" }}
          >
            NUESTROS SERVICIOS
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl"
            style={{ color: "#FAFAFA" }}
          >
            Todo lo que tu negocio necesita para crecer online
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] ${
                  service.featured
                    ? "md:col-span-2"
                    : ""
                }`}
                style={{
                  backgroundColor: "#161616",
                  border: "1px solid #222222",
                }}
                whileHover={{
                  borderColor: "#4A9D6E",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(74, 157, 110, 0.1)" }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "#4A9D6E" }}
                    strokeWidth={1.8}
                  />
                </div>

                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#FAFAFA" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#A1A1A1" }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
