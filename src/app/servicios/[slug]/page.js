"use client";
import { servicios } from "@/constants/servicios";
import { sucursal } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { use } from "react";

export default function ServicioPage({ params }) {
  const { slug } = use(params);
  const servicio = servicios.find((s) => s.slug === slug);

  if (!servicio) {
    notFound();
  }

  const whatsappLink = `https://wa.me/${sucursal.whatsappNumber}?text=${encodeURIComponent(
    `Hola, me interesa el servicio de ${servicio.nombre}. Me gustaría obtener más información.`
  )}`;

  return (
    <main className="pt-20 bg-background">
      {/* Hero del servicio */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={servicio.src}
          alt={servicio.nombre}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          {/* Línea decorativa */}
          <div className="w-12 h-px bg-primary mb-6"></div>

          <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            {servicio.nombre}
          </h1>

          <p className="font-secondary text-lg sm:text-xl text-white/90 max-w-2xl mb-8">
            {servicio.descripcion}
          </p>

          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="btn-white">Reservar este servicio</button>
          </Link>
        </motion.div>
      </section>

      {/* Descripción detallada */}
      <section className="padding">
        <div className="max-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Contenido principal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              {/* Línea decorativa */}
              <div className="w-12 h-px bg-primary mb-6"></div>

              <h2 className="font-primary text-3xl sm:text-4xl text-secondary mb-6">
                ¿De qué trata este servicio?
              </h2>

              <div className="space-y-4">
                {servicio.explicacion.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-secondary text-muted text-lg leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Sidebar con info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <div className="bg-background-alt p-8 sticky top-24">
                {/* Duración */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <span className="font-secondary text-sm uppercase tracking-wider text-primary">
                    Duración
                  </span>
                  <p className="font-primary text-2xl text-secondary mt-1">
                    {servicio.duracion}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="btn-primary w-full">Reservar ahora</button>
                </Link>

                <p className="font-secondary text-sm text-muted text-center mt-4">
                  Consultá disponibilidad vía WhatsApp
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="padding bg-background-alt">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
            <h2 className="font-primary text-3xl sm:text-4xl text-secondary">
              ¿Qué incluye?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicio.beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 flex items-start gap-4"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-secondary text-secondary">{beneficio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      {servicio.srcExtra && servicio.srcExtra.length > 0 && (
        <section className="padding">
          <div className="max-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
              <h2 className="font-primary text-3xl sm:text-4xl text-secondary">
                Galería
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicio.srcExtra.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative h-80 overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${servicio.nombre} - Imagen ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="relative h-[50vh] min-h-[350px]">
        <Image
          src={servicio.srcExtra?.[1] || servicio.src}
          alt={servicio.nombre}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <div className="w-12 h-px bg-primary mb-6"></div>

          <h2 className="font-primary text-3xl sm:text-4xl text-white mb-4">
            ¿Lista para transformar tu imagen?
          </h2>

          <p className="font-secondary text-white/90 mb-8 max-w-xl">
            Reservá tu consulta y comenzá este camino de autoconocimiento y
            transformación.
          </p>

          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="btn-white">Reservar {servicio.nombre}</button>
          </Link>
        </motion.div>
      </section>

      {/* Otros servicios */}
      <section className="padding bg-background">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-primary text-3xl sm:text-4xl text-secondary">
              Otros servicios
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios
              .filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((otroServicio, index) => (
                <motion.div
                  key={otroServicio.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/servicios/${otroServicio.slug}`}>
                    <div className="relative h-48 mb-4 overflow-hidden">
                      <Image
                        src={otroServicio.src}
                        alt={otroServicio.nombre}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-primary text-xl text-secondary group-hover:text-primary transition-colors">
                      {otroServicio.nombre}
                    </h3>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
