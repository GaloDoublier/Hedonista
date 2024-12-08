import ImageGrid from "../components/ImageGrid";
import Nosotros from "../sections/Nosotros";
import {DM_Serif_Text} from "next/font/google"
import { Inter } from "next/font/google";
import { Espacio1,Espacio2,Espacio3,Espacio14,Espacio5,Espacio9} from "@/assets/Images";
import Image from "next/image";
import EmblaCarousel from "../components/Carousel/EmblaCarousel";
import "../components/Carousel/css/embla.css"


const SerifText = DM_Serif_Text({
  weight: '400',
  subsets: ['latin'],
})
const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export default function Page() {

  const espacios =[Espacio1,Espacio2,Espacio3,Espacio14,Espacio5]

  return (
    <main className={inter.className}>
      <Nosotros />

      <section
        id="espacio"
        className="w-full h-[65vh] bg-espacio bg-cover bg-center bg-fixed"
      >
        <div className="flex flex-col justify-center items-center h-[65vh] gap-20 bg-black bg-opacity-50">
          <p
            className={`${SerifText.className} text-white relative text-center text-4xl sm:w-2/4`}
          >
            &quot;Un espacio lleno de vida y color. Me encanta la conexión con
            la naturaleza, la simpleza y arquitetura colonial del lugar.&quot;
          </p>
        </div>
      </section>

      <section className=" max-container padding-b">
        <div className="sm:block hidden">
          <ImageGrid />
        </div>
        <div className="block sm:hidden pt-10">
          <EmblaCarousel
            pictures={espacios}
            slides={Array.from({ length: espacios.length }, (_, i) => i)}
            options={{ loop: true }}
          />
        </div>
      </section>

      <section className=" max-container padding-b">
        <h2 className="text-6xl text-center pb-10">
          Nuestro <span className="text-primary">Servicio</span>
        </h2>
        <div className="flex-col flex lg:flex-row gap-20 sm:justify-around items-center">
          <ul className="flex flex-col gap-20 pl-0">
            <li className="relative pl-12 before:content-[''] before:w-3 before:h-3 before:bg-primary before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 text-3xl">
              En <span className="font-bold text-primary">Hedonista</span>,
              cuidamos cada detalle: desde la ambientación hasta el catering,
              todo está pensado para ti.
            </li>
            <li className="relative pl-12 before:content-[''] before:w-3 before:h-3 before:bg-primary before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 text-3xl">
              Ofrecemos{" "}
              <span className="font-bold text-primary">
                experiencias únicas
              </span>{" "}
              adaptadas a tus necesidades, diseñadas para que tu evento sea{" "}
              <span className="font-bold text-primary">inolvidable</span>.
            </li>
            <li className="relative pl-12 before:content-[''] before:w-3 before:h-3 before:bg-primary before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 text-3xl">
              {" "}
              Descubre por qué somos expertos en crear{" "}
              <span className="font-bold text-primary">
                momentos memorables
              </span>
              , donde el arte, la cultura y el placer se encuentran.
            </li>
          </ul>

          <Image
            className="h-[600px]"
            height={1080}
            width={760}
            alt="Hedonista Ramos Mejia"
            src={Espacio9}
          ></Image>
        </div>
      </section>
    </main>
  );
}
