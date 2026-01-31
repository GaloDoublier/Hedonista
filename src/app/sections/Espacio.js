"use client";
import Link from "next/link";
import { espacioSection } from "@/constants";
import { motion } from "framer-motion";

const Espacio = () => {
  return (
    <section id="espacio" className="w-full min-h-[70vh] bg-espacio bg-cover bg-center bg-fixed relative">
      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 flex flex-col justify-center items-center min-h-[70vh] gap-8 px-6 py-16"
      >
        {/* Línea decorativa */}
        <div className="w-12 h-px bg-primary"></div>

        {/* Título */}
        <h2 className="font-primary text-4xl sm:text-5xl lg:text-6xl text-white text-center">
          {espacioSection.titulo}
        </h2>

        {/* Descripción */}
        <p className="font-secondary text-lg sm:text-xl text-white/90 text-center max-w-2xl leading-relaxed font-light">
          {espacioSection.descripcion}
        </p>

        {/* CTA */}
        <Link href="/sobre-mi#espacio">
          <button className="btn-white mt-4">
            {espacioSection.cta}
          </button>
        </Link>

        {/* Línea decorativa */}
        <div className="w-12 h-px bg-primary"></div>
      </motion.div>
    </section>
  );
};

export default Espacio;
