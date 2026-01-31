"use client";
import { servicios } from "@/constants/servicios";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ServicioCard = ({ servicio, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-16 items-center py-12 border-b border-gray-100 last:border-b-0`}
    >
      {/* Imagen */}
      <div className="w-full lg:w-1/2">
        <div className="relative overflow-hidden group">
          <div
            className={`absolute -top-4 ${
              isEven ? "-left-4" : "-right-4"
            } w-full h-full border-2 border-primary/20 -z-10`}
          ></div>
          <Image
            src={servicio.src}
            alt={servicio.nombre}
            width={600}
            height={400}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="w-full lg:w-1/2">
        {/* Línea decorativa */}
        <div className="w-12 h-px bg-primary mb-4"></div>

        <h2 className="font-primary text-3xl sm:text-4xl text-secondary mb-4">
          {servicio.nombre}
        </h2>

        <p className="font-secondary text-muted leading-relaxed mb-4">
          {servicio.descripcion}
        </p>

        <p className="font-secondary text-sm text-primary mb-6">
          Duración aproximada: {servicio.duracion}
        </p>

        <Link href={`/servicios/${servicio.slug}`}>
          <button className="btn-outline">Ver más detalles</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default function ServiciosPage() {
  return (
    <main className="pt-20 bg-background">
      {/* Hero */}
      <section className="padding bg-background-alt">
        <div className="max-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Línea decorativa */}
            <div className="w-12 h-px bg-primary mx-auto mb-6"></div>

            <h1 className="font-primary text-5xl sm:text-6xl text-secondary mb-6">
              Servicios
            </h1>

            <p className="font-secondary text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Cada servicio está diseñado para acompañarte en un proceso de
              transformación personal, ayudándote a descubrir y proyectar tu
              mejor versión.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lista de servicios */}
      <section className="padding">
        <div className="max-container">
          {servicios.map((servicio, index) => (
            <ServicioCard key={servicio.slug} servicio={servicio} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="padding bg-primary/10">
        <div className="max-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl sm:text-4xl text-secondary mb-4">
              ¿Lista para dar el primer paso?
            </h2>
            <p className="font-secondary text-muted mb-8 max-w-xl mx-auto">
              Reservá una consulta y comencemos juntas este camino de
              transformación.
            </p>
            <Link href="/reserva">
              <button className="btn-primary">Reservar consulta</button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
