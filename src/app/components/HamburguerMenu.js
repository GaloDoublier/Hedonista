"use client";
import { hamburger } from "@/assets/Icons";
import { navLinks } from "@/constants";
import { eventos } from "@/constants/eventos";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

const HamburguerMenu = () => {
  const [visible, setVisible] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };
  const handleEventsToggle = () => {
    setShowEvents(!showEvents);
};

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <>
      {/* Botón Hamburguesa */}
      <div className="md:hidden cursor-pointer z-50">
        <button onClick={toggleMenu}>
          <Image alt="Hamburguer" height={25} width={23} src={hamburger} />
        </button>
      </div>

      {/* Fondo semi-transparente cuando el menú está abierto */}
      {visible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeMenu} // Cerrar el menú al hacer clic fuera
        ></div>
      )}

      {/* Menú deslizante */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-64 bg-primary text-white p-8 transition-transform duration-300 transform ${
          visible ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {/* Botón para cerrar el menú */}
        <button
          className="text-3xl mb-8 focus:outline-none"
          onClick={toggleMenu}
        >
          &times;
        </button>

        {/* Links de navegación */}
        <nav>
          <ul className="space-y-4">
            {navLinks.map((link,index)=>{
              if(link.label==="Eventos"){
                return (
                  <div key={index} className="">
                    <li onClick={handleEventsToggle} className="text-white flex">
                      <button className="py-2">
                        {link.label}
                      </button>
                      <svg
                        className={`mx-1 my-auto h-5 w-5 transition-transform duration-300 ease-in-out transform ${
                          showEvents ? "rotate-180" : "rotate-0"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </li>
                    <AnimatePresence>
                      {showEvents && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }} // Estado inicial
                          animate={{ opacity: 1, height: "auto" }} // Estado final
                          exit={{ opacity: 0, height: 0 }} // Estado de salida
                          transition={{ duration: 0.3 }} // Duración de la animación
                          className="flex flex-col items-start overflow-hidden underline" // Oculta el contenido excedente
                        >
                          {eventos.map((evento) => (
                            <Link href={`/eventos/${evento.slug}`}>
                              <li onClick={()=>{
                                setShowEvents(false)
                                closeMenu()}
                                } className="p-3">{evento.nombre}</li>
                            </Link>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              else{
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:underline"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }
              
            })}

            <li className="absolute top-[90vh] left-40"><Link href="/reserva" onClick={closeMenu}>Reserva ya</Link></li>

          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburguerMenu;
