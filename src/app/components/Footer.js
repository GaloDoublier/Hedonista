"use client";
import { nombre, redes, sucursal, navLinks } from "@/constants";
import { servicios } from "@/constants/servicios";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-secondary text-white">
      {/* Main footer content */}
      <div className="padding">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/">
                <h3 className="font-primary text-3xl mb-4">{nombre}</h3>
              </Link>
              <p className="font-secondary text-white/70 text-sm leading-relaxed mb-6">
                Asesoría de imagen personal y belleza. Descubrí tu estilo único
                con acompañamiento profesional y personalizado.
              </p>
              {/* Redes sociales */}
              <div className="flex gap-4">
                {redes.map((red, index) => (
                  <a
                    key={index}
                    href={red.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                    aria-label={red.nombre}
                  >
                    <Image
                      alt={red.nombre}
                      height={24}
                      width={24}
                      src={red.src}
                      className="invert"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Navegación */}
            <div>
              <h4 className="font-primary text-lg mb-4">Navegación</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-secondary text-sm text-white/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/reserva"
                    className="font-secondary text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    Reservar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="font-primary text-lg mb-4">Servicios</h4>
              <ul className="space-y-2">
                {servicios.slice(0, 5).map((servicio) => (
                  <li key={servicio.slug}>
                    <Link
                      href={`/servicios/${servicio.slug}`}
                      className="font-secondary text-sm text-white/70 hover:text-primary transition-colors"
                    >
                      {servicio.nombre}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/servicios"
                    className="font-secondary text-sm text-primary hover:underline"
                  >
                    Ver todos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-primary text-lg mb-4">Contacto</h4>
              <ul className="space-y-3 font-secondary text-sm">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-white/70">
                    {sucursal.name}, {sucursal.location}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`https://wa.me/${sucursal.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {sucursal.telefono}
                  </a>
                </li>
              </ul>

              {/* CTA */}
              <Link href="/reserva" className="inline-block mt-6">
                <button className="px-6 py-2 bg-primary text-white font-secondary text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors">
                  Reservar consulta
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-container px-6 sm:px-12 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-secondary text-sm text-white/50">
              © {new Date().getFullYear()} {nombre}. Todos los derechos
              reservados.
            </p>
            <p className="font-secondary text-sm text-white/50">
              Diseño y desarrollo por{" "}
              <a
                href="#"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GDS
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
