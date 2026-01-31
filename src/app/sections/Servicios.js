"use client";
import { servicios } from "@/constants/servicios";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ServicioCard = ({ servicio, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="group bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
    >
      {/* Imagen */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={servicio.src}
          alt={servicio.nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Overlay en hover */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="font-primary text-xl sm:text-2xl text-secondary mb-3">
          {servicio.nombre}
        </h3>
        <p className="font-secondary text-muted text-sm leading-relaxed mb-4">
          {servicio.descripcion}
        </p>
        <Link
          href={`/servicios/${servicio.slug}`}
          className="inline-flex items-center font-secondary text-sm text-primary hover:text-primary-dark transition-colors uppercase tracking-wider"
        >
          Ver servicio
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const Servicios = () => {
  return (
    <section id="servicios" className="padding bg-background">
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
          
          <h2 className="section-title">Servicios</h2>
          <p className="section-subtitle">
            Cada servicio está diseñado para acompañarte en tu proceso de transformación personal
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <ServicioCard key={servicio.slug} servicio={servicio} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/servicios">
            <button className="btn-outline">Ver todos los servicios</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;
