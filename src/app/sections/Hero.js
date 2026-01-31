"use client";
import Image from "next/image";
import { abajo } from "@/assets/Icons";
import Link from "next/link";
import { nombre, heroSubtitle, heroCTA, sucursal } from "@/constants";
import { motion } from "framer-motion";

const Hero = () => {
  const whatsappLink = `https://wa.me/${sucursal.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me gustaría reservar una consulta de imagen personal."
  )}`;

  return (
    <section
      id="home"
      className="relative h-screen w-full bg-hero max-lg:bg-center bg-fixed bg-cover"
    >
      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0"></div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
      >
        {/* Línea decorativa superior */}
        <div className="w-16 h-px bg-primary mb-8"></div>

        {/* Nombre de la marca */}
        <h1 className="font-primary text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-wide mb-4">
          {nombre}
        </h1>

        {/* Subtítulo */}
        <p className="font-secondary text-lg sm:text-xl lg:text-2xl font-light tracking-wider mb-8 max-w-2xl text-white/90">
          {heroSubtitle}
        </p>

        {/* CTA Principal */}
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="btn-white">
            {heroCTA}
          </button>
        </Link>

        {/* Línea decorativa inferior */}
        <div className="w-16 h-px bg-primary mt-8"></div>

        {/* Flecha hacia abajo */}
        <a className="absolute bottom-8" href="#espacio">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              alt="Ver más"
              className="opacity-80 hover:opacity-100 transition-opacity"
              height={32}
              width={32}
              src={abajo}
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
