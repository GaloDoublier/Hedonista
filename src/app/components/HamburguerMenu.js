"use client";
import { navLinks, nombre } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HamburguerMenu = ({ textColor, isScrolled, pathname }) => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  const getIconColor = () => {
    if (pathname === "/" && !isScrolled) {
      return "#ffffff";
    }
    return "#2C2C2C";
  };

  return (
    <>
      {/* Botón Hamburguesa */}
      <button
        onClick={toggleMenu}
        className="z-50 p-2 focus:outline-none"
        aria-label="Menú"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke={getIconColor()}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Menú deslizante */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-80 bg-white z-50 shadow-2xl"
          >
            {/* Header del menú */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <span className="font-primary text-2xl text-secondary">
                {nombre}
              </span>
              <button
                onClick={toggleMenu}
                className="p-2 focus:outline-none"
                aria-label="Cerrar menú"
              >
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Links de navegación */}
            <nav className="p-6">
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 font-secondary text-secondary hover:text-primary transition-colors border-b border-gray-50"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Reservar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8"
              >
                <Link
                  href="/reserva"
                  onClick={closeMenu}
                  className="block w-full py-4 text-center bg-primary text-white font-secondary uppercase tracking-wider hover:bg-primary-dark transition-colors"
                >
                  Reservar consulta
                </Link>
              </motion.div>
            </nav>

            {/* Decoración inferior */}
            <div className="absolute bottom-8 left-6 right-6">
              <div className="w-12 h-px bg-primary mx-auto"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburguerMenu;
