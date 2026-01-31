"use client";
import Image from "next/image";
import { NosotrosImg } from "@/assets/Images";
import { sobreMi } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion";

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="padding bg-background-alt">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 w-full lg:w-auto"
          >
            <div className="relative">
              {/* Marco decorativo */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 -z-10"></div>
              <Image
                height={600}
                width={500}
                alt="Huarte - Asesora de Imagen"
                className="w-full h-auto object-cover"
                src={NosotrosImg}
              />
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            {/* Línea decorativa */}
            <div className="w-12 h-px bg-primary mb-6"></div>

            {/* Subtítulo */}
            <span className="font-secondary text-primary uppercase tracking-widest text-sm">
              {sobreMi.titulo}
            </span>

            {/* Título */}
            <h2 className="font-primary text-4xl sm:text-5xl text-secondary mt-2 mb-6">
              {sobreMi.subtitulo}
            </h2>

            {/* Descripción */}
            <div className="space-y-4">
              {sobreMi.descripcion.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="font-secondary text-muted text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link href="/sobre-mi">
                <button className="btn-outline">Conocé más sobre mí</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
