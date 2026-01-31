"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navLinks, nombre, sucursal } from "@/constants";
import HamburguerMenu from "./HamburguerMenu";
import Link from "next/link";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const whatsappLink = `https://wa.me/${sucursal.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me gustaría reservar una consulta."
  )}`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const determineNavbarClass = () => {
    if (pathname === "/") {
      return isScrolled
        ? "bg-white/95 backdrop-blur-sm shadow-sm"
        : "bg-transparent";
    }
    return "bg-white/95 backdrop-blur-sm shadow-sm";
  };

  const determineTextColor = () => {
    if (pathname === "/" && !isScrolled) {
      return "text-white";
    }
    return "text-secondary";
  };

  const determineLinkHoverColor = () => {
    if (pathname === "/" && !isScrolled) {
      return "hover:text-primary";
    }
    return "hover:text-primary";
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <motion.nav
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`flex justify-between items-center w-full px-6 sm:px-12 h-20 transition-all duration-500 ${determineNavbarClass()}`}
      >
        {/* Logo / Nombre */}
        <Link href="/" className="flex items-center">
          <span
            className={`font-primary text-2xl sm:text-3xl tracking-wide transition-colors duration-300 ${determineTextColor()}`}
          >
            {nombre}
          </span>
        </Link>

        {/* Links de navegación - Desktop */}
        <ul className="flex-1 justify-center items-center gap-6 lg:gap-10 hidden lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`font-secondary text-sm uppercase tracking-wider transition-colors duration-300 ${determineTextColor()} ${determineLinkHoverColor()}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA - Desktop */}
        <Link
          href="/reserva"
          className={`hidden lg:block font-secondary text-sm uppercase tracking-wider px-6 py-2 border transition-all duration-300 ${
            pathname === "/" && !isScrolled
              ? "border-white text-white hover:bg-white hover:text-secondary"
              : "border-primary text-primary hover:bg-primary hover:text-white"
          }`}
        >
          Reservar
        </Link>

        {/* Menú hamburguesa - Mobile */}
        <div className="lg:hidden">
          <HamburguerMenu
            textColor={determineTextColor()}
            isScrolled={isScrolled}
            pathname={pathname}
          />
        </div>
      </motion.nav>
    </header>
  );
};
