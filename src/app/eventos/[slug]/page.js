import { eventos } from "@/constants/eventos";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import {DM_Serif_Text} from "next/font/google"
import DetallesCard from "@/app/components/DetallesCard";
import { precioImg,materialImg,duracionImg } from "@/assets/Icons";

const SerifText = DM_Serif_Text({
  weight: '400',
  subsets: ['latin'],
})

const page = ({params: {slug}}) => {
  const event = eventos.find(event => event.slug === slug); 
  return (
    <main className={SerifText.className}>
      <section className="sm:px-12 px-8 sm:py-24 py-16 max-container">
      <div className="relative w-full h-[35rem]">
      {/* Imagen */}
      <Image 
        src={event.src} 
        alt="Descripción de la imagen"
        layout="fill" // Ajusta el tamaño automáticamente
        objectFit="cover" // Hace que la imagen cubra todo el contenedor
      />
      
      {/* Texto sobre la imagen */}
      <div className="bg-black opacity-60 h-full w-full"></div>
      <div 
      className="absolute inset-0 flex flex-col items-center justify-center  ">
        <div className="  w-full h-full flex flex-col justify-around py-10 items-center">
          <div className="text-center flex flex-col gap-10">
            <h1 className="text-white text-center text-6xl sm:text-8xl">
            {event.nombre}
            </h1>
            <h2 className="text-white text-xl w-3/4  mx-auto">{event.descripcion}</h2>
            <Link href="/reserva"><ButtonPrimary text="Reservar"/></Link>
              </div>
        </div>
      </div>
    </div>
      </section>
      <article  className="padding-b max-container">
        <h2 className="text-center text-3xl sm:text-6xl">¿De que <span className="font-bold text-primary">trata</span> el evento de <span className="font-bold text-primary">{event.nombre}</span>?</h2>
        <div className="flex flex-col xl:flex-row gap-6 justify-center items-center padding">
        <p className="text-2xl leading-10 flex-1 md:px-24 max-sm:text-center">{event.explicacion}</p>
        <Image alt={event.nombre} className="flex-1 block max-sm:hidden h-[60vh]" width={760} height={1080} src={event.srcExtra[0]} />
        </div>
      </article>
      <Image alt={event.nombre} className="flex-1 hidden max-sm:block pb-10" width={760} height={1080} src={event.srcExtra[0]} />
      <section className="flex flex-col justify-center items-center gap-20">
      <h2 className="text-center text-5xl sm:text-6xl"> <span className="font-bold text-primary">Detalles</span> del evento</h2>
      <div className="flex flex-col lg:flex-row  gap-3 lg:gap-10 justify-around items-center w-3/4 py-12">
        <DetallesCard  detalle={`$${event.precio}`} logo={precioImg}/>
        <DetallesCard  detalle={event.material} logo={materialImg}/>
        <DetallesCard  detalle={event.duracion} logo={duracionImg}/>
      </div>
      </section>

      <section className="padding max-container">
        <h2 className="text-center text-5xl sm:text-6xl py-20">¿Que estas esperando? <span className="text-primary">reseva ya!</span></h2>
        <div className="relative w-full h-[35rem]">
      {/* Imagen */}
      <Image 
        src={event.srcExtra[1]} 
        alt="Descripción de la imagen"
        layout="fill" // Ajusta el tamaño automáticamente
        objectFit="cover" // Hace que la imagen cubra todo el contenedor
      />
      
      {/* Texto sobre la imagen */}
      <div className="bg-black opacity-60 h-full w-full"></div>
      <div 
      className="absolute inset-0 flex flex-col items-center justify-center  ">
        <div className="  w-full h-full flex flex-col justify-around py-10 items-center">
          <div className="text-center flex flex-col gap-10">
            <h3 className="text-white text-center text-6xl sm:text-8xl">
            {event.nombre}
            </h3>
            <Link href="/reserva"><ButtonPrimary text="Reservar"/></Link>
              </div>
        </div>
      </div>
    </div>
      </section>
    </main>
  )
}

export default page