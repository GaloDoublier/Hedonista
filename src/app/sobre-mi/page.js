"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NosotrosImg, Espacio1, Espacio2, Espacio3, Espacio5, Espacio9 } from "@/assets/Images";
import { nombre, sucursal } from "@/constants";

export default function SobreMiPage() {
  const whatsappLink = `https://wa.me/${sucursal.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me gustaría conocer más sobre tus servicios."
  )}`;

  return (
    <main className="pt-20 bg-background">
      {/* Hero */}
      <section className="padding bg-background-alt">
        <div className="max-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 -z-10"></div>
                <Image
                  src={NosotrosImg}
                  alt="Huarte - Asesora de Imagen Personal"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              {/* Línea decorativa */}
              <div className="w-12 h-px bg-primary mb-6"></div>

              <span className="font-secondary text-primary uppercase tracking-widest text-sm">
                Sobre mí
              </span>

              <h1 className="font-primary text-4xl sm:text-5xl text-secondary mt-2 mb-6">
                Huarte
              </h1>

              <div className="space-y-4 font-secondary text-muted text-lg leading-relaxed">
                <p>
                  Soy asesora de imagen personal y especialista en belleza con
                  más de una década de experiencia acompañando a mujeres en su
                  proceso de transformación.
                </p>
                <p>
                  Mi formación combina estudios en imagen, colorimetría,
                  estilismo y maquillaje profesional. Pero más allá de los
                  títulos, lo que me define es mi pasión por ayudar a las
                  personas a verse y sentirse auténticas.
                </p>
                <p>
                  Creo firmemente que la imagen personal es mucho más que
                  apariencia: es una herramienta de comunicación, de
                  autoexpresión y de empoderamiento. Cada persona tiene una
                  esencia única que merece ser visible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="padding bg-background">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Línea decorativa */}
            <div className="w-12 h-px bg-primary mx-auto mb-6"></div>

            <h2 className="font-primary text-3xl sm:text-4xl text-secondary mb-8">
              Mi filosofía
            </h2>

            <blockquote className="font-primary text-2xl sm:text-3xl text-muted italic leading-relaxed mb-8">
              &ldquo;La verdadera elegancia no está en seguir tendencias, sino
              en conocerte, aceptarte y expresar quién sos a través de tu
              imagen.&rdquo;
            </blockquote>

            <p className="font-secondary text-muted text-lg leading-relaxed">
              Mi trabajo no se trata de imponer estilos ni de seguir reglas
              rígidas. Se trata de escucharte, entenderte y crear juntas una
              imagen que te represente auténticamente. Porque cuando te ves
              bien, te sentís bien, y cuando te sentís bien, todo cambia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mi enfoque */}
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
              Mi forma de trabajar
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titulo: "Escucha activa",
                descripcion:
                  "Antes de cualquier recomendación, me tomo el tiempo de conocerte. Entender tu estilo de vida, tus necesidades y tus sueños es fundamental para crear una imagen que realmente te represente.",
              },
              {
                titulo: "Mirada personalizada",
                descripcion:
                  "No hay fórmulas mágicas ni recetas universales. Cada persona es única, y mi trabajo es descubrir qué te hace especial y potenciarlo con las herramientas adecuadas.",
              },
              {
                titulo: "Acompañamiento genuino",
                descripcion:
                  "No estás sola en este proceso. Te acompaño en cada paso, celebrando tus avances y apoyándote en los desafíos. Tu transformación es también la mía.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-8 text-center"
              >
                <div className="w-8 h-px bg-primary mx-auto mb-6"></div>
                <h3 className="font-primary text-xl text-secondary mb-4">
                  {item.titulo}
                </h3>
                <p className="font-secondary text-muted leading-relaxed">
                  {item.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* El espacio */}
      <section id="espacio" className="padding bg-background">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
            <h2 className="font-primary text-3xl sm:text-4xl text-secondary mb-4">
              El espacio
            </h2>
            <p className="font-secondary text-muted text-lg max-w-2xl mx-auto">
              Un lugar pensado para vos, donde cada detalle está cuidado para
              que tu experiencia sea única.
            </p>
          </motion.div>

          {/* Galería del espacio */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[Espacio1, Espacio2, Espacio3, Espacio5, Espacio9, NosotrosImg].map(
              (img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden ${
                    index === 0 || index === 5
                      ? "col-span-2 md:col-span-1 h-64 md:h-80"
                      : "h-48 md:h-64"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Espacio ${nombre} - ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              )
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 max-w-2xl mx-auto text-center"
          >
            <p className="font-secondary text-muted text-lg leading-relaxed">
              El espacio donde trabajo fue diseñado para transmitir calma,
              confianza y profesionalismo. Es un lugar íntimo donde podés
              sentirte cómoda, relajarte y conectar con vos misma mientras
              trabajamos en tu imagen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="padding bg-rose/30">
        <div className="max-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-px bg-primary mx-auto mb-6"></div>

            <h2 className="font-primary text-3xl sm:text-4xl text-secondary mb-4">
              ¿Te gustaría conocernos?
            </h2>

            <p className="font-secondary text-muted text-lg max-w-xl mx-auto mb-8">
              Estoy acá para acompañarte en tu proceso de transformación.
              Escribime y empecemos a trabajar juntas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reserva">
                <button className="btn-primary">Reservar consulta</button>
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-outline">Escribirme por WhatsApp</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
