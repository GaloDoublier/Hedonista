"use client";
import { useState } from "react";
import { servicios } from "@/constants/servicios";
import { sucursal, nombre } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { NosotrosImg } from "@/assets/Images";

export default function ReservaPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    servicio: servicios[0]?.nombre || "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `Hola, soy ${formData.nombre}. Me interesa el servicio de ${formData.servicio}. ${formData.mensaje}`;
    const encodedText = encodeURIComponent(texto);
    const url = `https://wa.me/${sucursal.whatsappNumber}?text=${encodedText}`;

    window.open(url, "_blank");
  };

  return (
    <main className="pt-20 bg-background min-h-screen">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
          {/* Imagen lateral - solo desktop */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <Image
              src={NosotrosImg}
              alt="Reserva tu consulta"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
          </div>

          {/* Formulario */}
          <div className="w-full lg:w-1/2 flex items-center justify-center padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md"
            >
              {/* Header */}
              <div className="mb-10">
                <div className="w-12 h-px bg-primary mb-6"></div>
                <h1 className="font-primary text-4xl sm:text-5xl text-secondary mb-4">
                  Reservar consulta
                </h1>
                <p className="font-secondary text-muted leading-relaxed">
                  Completá el formulario y te contactaré a la brevedad para
                  coordinar tu consulta.
                </p>
              </div>

              {/* Formulario */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block font-secondary text-sm text-secondary uppercase tracking-wider mb-2">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="¿Cómo te llamás?"
                    className="w-full px-4 py-3 bg-white border border-gray-200 font-secondary text-secondary placeholder-muted/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Servicio */}
                <div>
                  <label className="block font-secondary text-sm text-secondary uppercase tracking-wider mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 font-secondary text-secondary focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    {servicios.map((servicio) => (
                      <option key={servicio.slug} value={servicio.nombre}>
                        {servicio.nombre}
                      </option>
                    ))}
                    <option value="Consulta general">Consulta general</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block font-secondary text-sm text-secondary uppercase tracking-wider mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Contame un poco sobre lo que estás buscando..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 font-secondary text-secondary placeholder-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full">
                  Enviar consulta por WhatsApp
                </button>

                <p className="font-secondary text-sm text-muted text-center">
                  Al enviar, serás redirigida a WhatsApp con tu mensaje
                  prearmado.
                </p>
              </form>

              {/* Info adicional */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-primary text-xl text-secondary mb-4">
                  ¿Preferís otro medio?
                </h3>
                <div className="space-y-2 font-secondary text-muted">
                  <p>
                    <span className="text-secondary">WhatsApp:</span>{" "}
                    {sucursal.telefono}
                  </p>
                  <p>
                    <span className="text-secondary">Instagram:</span>{" "}
                    @huarteimagen
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
