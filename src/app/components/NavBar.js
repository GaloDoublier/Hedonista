"use client"; // Esto indica que es un componente de cliente

import { usePathname } from 'next/navigation'; // libreria que no consume mucho por que el calculo es minimo y para estos casos se rre usa
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navLinks } from "@/constants"; // Importar los links de constants
import HamburguerMenu from "./HamburguerMenu";
import { logo } from "@/constants";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";
import Link from 'next/link';

export const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname(); // Para detectar la ruta actual

  // Detectar cambios en el scroll
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50); // Cambiar estado según el scroll (para cambiar color)
  });

  // Cambiar el color del navbar basado en la ruta y el scroll
  const determineNavbarClass = () => {
    if (pathname === '/') {
      return isScrolled ? 'bg-primary' : 'bg-transparent'; // Transparente al principio, verde al hacer scroll
    }
    return 'bg-primary'; // Verde en cualquier otra ruta
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <motion.nav
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`bg-primary flex justify-between items-center w-full px-12 h-20 opacity-90 transition-colors duration-500  ${determineNavbarClass()}`}
      >
        <Link href="/">
          <Image className='rounded-full' src={logo} height={50} width={50} alt="logo" />
        </Link>
        <ul className="flex flex-1 justify-center max-md:hidden items-center gap-12 lg:gap-24">
          {navLinks.map((item) => {
            if (item.label === "Eventos") {
              return (
                <li
                className=" leading-normal text-lg text-white group transition-all duration-300 ease-out"
                key={item.label}
              >
              <DropdownMenu background={determineNavbarClass()} nombre={item.label} key={item.label} />
              </li>
              )
            } else {
              return (
                <li
                  className=" leading-normal text-lg text-white group hover:opacity-60 transition-all duration-300 ease-out"
                  key={item.label}
                >
                  <Link className="relative inline-block" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>

        <Link href="/reserva" className="text-white max-md:hidden hover:underline">Reserva ya</Link>

        {/* Integración del menú hamburguesa */}
        <div className="relative z-50">
          <HamburguerMenu />
        </div>
      </motion.nav>
    </header>
  );
};
