"use client"
import Image from "next/image"
import { abajo } from "@/assets/Icons"
import Link from "next/link"
import { nombre } from "@/constants"
import { Economica } from "next/font/google"
import { motion } from "framer-motion"
const Eco = Economica({
  weight: '400',
  subsets: ['latin'],
})

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full bg-hero max-lg:bg-center bg-fixed bg-cover "
    >
              {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

       {/* Contenido */}
       <motion.div 
        //animacion wonks
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease:"easeOut"}}
        viewport={{ once: true, amount: "some" }}

        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className={`${Eco.className} sm:text-[8rem] text-6xl font-bold`}>{nombre}</h1>
        <p className="mt-4 text-2xl">Crea recuerdos inolvidables.</p>
        <button className="mt-8 px-6 py-3 text-white border-2 hover:bg-white hover:text-black text-lg transition-all duration-500 ease-out">
          <Link href="/reserva">Reserva tu evento</Link>
        </button>
        <a className="absolute bottom-[0vh]" href="#nosotros">
          <Image alt="nosotros" className="mb-20 animate-slideIn" height={40} width={40} src={abajo} />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero