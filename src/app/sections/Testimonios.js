"use client";
import { clientes } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const TestimonioCard = ({ nombre, desc, src, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Quote icon */}
      <div className="text-primary/20 mb-4">
        <svg
          className="w-10 h-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Testimonio */}
      <p className="font-secondary text-muted leading-relaxed mb-6 italic">
        &ldquo;{desc}&rdquo;
      </p>

      {/* Info del cliente */}
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
          <Image
            src={src}
            alt={nombre}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-primary text-lg text-secondary">{nombre}</p>
          <p className="font-secondary text-sm text-muted">Clienta</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonios = () => {
  return (
    <section id="testimonios" className="padding bg-rose/30">
      <div className="max-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Línea decorativa */}
          <div className="w-12 h-px bg-primary mx-auto mb-6"></div>

          <h2 className="section-title">
            Lo que dicen mis clientas
          </h2>
          <p className="section-subtitle">
            Experiencias reales de quienes confiaron en el proceso
          </p>
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientes.map((testimonio, index) => (
            <TestimonioCard key={index} {...testimonio} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
