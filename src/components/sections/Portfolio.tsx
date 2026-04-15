"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "TodoCamisas",
    description: "E-commerce de dotaciones empresariales",
    result: "Aumento de 300% en consultas",
    tag: "E-commerce",
    gradient: "from-emerald-600 to-teal-800",
  },
  {
    title: "Almería US",
    description: "Portal inmobiliario internacional",
    result: "Presencia digital desde cero",
    tag: "Web App",
    gradient: "from-blue-600 to-indigo-800",
  },
  {
    title: "A Lo Profundo",
    description: "Plataforma deportiva de béisbol",
    result: "Comunidad de +500 usuarios",
    tag: "Plataforma",
    gradient: "from-orange-600 to-red-800",
  },
  {
    title: "Chatbot WhatsApp",
    description: "Asistente IA para atención al cliente",
    result: "Respuesta automática 24/7",
    tag: "Automatización",
    gradient: "from-purple-600 to-fuchsia-800",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#D4A853" }}
          >
            PORTAFOLIO
          </span>
          <h2
            className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "#FAFAFA" }}
          >
            Proyectos que hablan por sí solos
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2"
              style={{
                backgroundColor: "#161616",
                borderColor: "#222222",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4A9D6E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#222222";
              }}
            >
              {/* Gradient placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span
                  className="text-lg font-semibold opacity-30"
                  style={{ color: "#FAFAFA" }}
                >
                  {project.title}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tag */}
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(74, 157, 110, 0.15)",
                    color: "#4A9D6E",
                  }}
                >
                  {project.tag}
                </span>

                <h3
                  className="mt-3 text-xl font-semibold"
                  style={{ color: "#FAFAFA" }}
                >
                  {project.title}
                </h3>

                <p
                  className="mt-1 text-sm leading-relaxed"
                  style={{ color: "#A1A1A1" }}
                >
                  {project.description}
                </p>

                <p
                  className="mt-3 text-sm font-medium"
                  style={{ color: "#4A9D6E" }}
                >
                  {project.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
