"use client";
import { programa } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NosotrosImg } from "@/assets/Images";

const SectionCard = ({ titulo, items, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white p-8 shadow-sm"
    >
      <h3 className="font-primary text-2xl text-secondary mb-6">{titulo}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span className="font-secondary text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function ProgramaPage() {
  return (
    <main className="pt-20 bg-background">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src={NosotrosImg}
            alt="Programa Imagen y Belleza"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        </div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-container padding"
        >
          <div className="max-w-2xl">
            {/* Línea decorativa */}
            <div className="w-12 h-px bg-primary mb-6"></div>

            <span className="font-secondary text-primary uppercase tracking-widest text-sm">
              Formación profesional
            </span>

            <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl text-white mt-4 mb-6">
              {programa.titulo}
            </h1>

            <p className="font-secondary text-xl text-white/90 mb-8">
              {programa.subtitulo}
            </p>

            <Link
              href={programa.hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-white">{programa.cta}</button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Descripción */}
      <section className="padding bg-background">
        <div className="max-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              {/* Línea decorativa */}
              <div className="w-12 h-px bg-primary mb-6"></div>

              <h2 className="font-primary text-3xl sm:text-4xl text-secondary mb-6">
                ¿De qué se trata el programa?
              </h2>

              <div className="space-y-4">
                {programa.descripcion.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-secondary text-muted text-lg leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 -z-10"></div>
                <Image
                  src={NosotrosImg}
                  alt="Programa"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secciones: Para quién, Qué aprendes, Beneficios */}
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
              Todo lo que necesitás saber
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SectionCard
              titulo={programa.paraQuien.titulo}
              items={programa.paraQuien.items}
              index={0}
            />
            <SectionCard
              titulo={programa.queAprendes.titulo}
              items={programa.queAprendes.items}
              index={1}
            />
            <SectionCard
              titulo={programa.beneficios.titulo}
              items={programa.beneficios.items}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="padding bg-primary">
        <div className="max-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Línea decorativa */}
            <div className="w-12 h-px bg-white/50 mx-auto mb-6"></div>

            <h2 className="font-primary text-3xl sm:text-4xl text-white mb-4">
              ¿Lista para transformar tu carrera?
            </h2>

            <p className="font-secondary text-white/90 mb-8 max-w-xl mx-auto">
              Inscribite ahora y comenzá a construir tu camino en el mundo de la
              imagen y la belleza.
            </p>

            <Link
              href={programa.hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 bg-white text-primary font-secondary text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300">
                {programa.cta}
              </button>
            </Link>

            <p className="font-secondary text-sm text-white/70 mt-4">
              Serás redirigida a la plataforma de Hotmart para completar tu
              inscripción.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ o información adicional */}
      <section className="padding bg-background">
        <div className="max-container">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="w-12 h-px bg-primary mb-6"></div>
              <h2 className="font-primary text-3xl sm:text-4xl text-secondary mb-6">
                ¿Tenés dudas?
              </h2>
              <p className="font-secondary text-muted text-lg leading-relaxed mb-6">
                Si querés más información sobre el programa, contenidos,
                modalidad o cualquier otra consulta, no dudes en escribirme.
                Estoy para ayudarte a dar el primer paso hacia tu
                transformación profesional.
              </p>
              <Link href="/reserva">
                <button className="btn-outline">Contactar</button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2 bg-background-alt p-8"
            >
              <h3 className="font-primary text-xl text-secondary mb-4">
                Información importante
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-secondary font-medium text-secondary">
                      Modalidad:
                    </span>
                    <span className="font-secondary text-muted ml-2">
                      100% online, a tu ritmo
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-secondary font-medium text-secondary">
                      Acceso:
                    </span>
                    <span className="font-secondary text-muted ml-2">
                      Inmediato y de por vida
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-secondary font-medium text-secondary">
                      Certificación:
                    </span>
                    <span className="font-secondary text-muted ml-2">
                      Al completar el programa
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-secondary font-medium text-secondary">
                      Soporte:
                    </span>
                    <span className="font-secondary text-muted ml-2">
                      Comunidad exclusiva + seguimiento
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
