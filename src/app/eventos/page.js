import { Inter } from "next/font/google"
import EmblaCarousel from "../components/Carousel/EmblaCarousel"
import { eventos } from "@/constants/eventos"
import "../components/Carousel/css/embla.css"
const SerifText = Inter({
    weight: '400',
    subsets: ['latin'],
  })
  
  export default function Page() {
  
    return (
        <main className={`${SerifText.className}`}>
            <section className="padding">
            <h2 className="text-6xl text-center">Nuestros <span className="text-primary">Eventos</span></h2>
            <EmblaCarousel pictures={eventos} slides={Array.from( { length: eventos.length }, (_, i) => i)} options={{loop: true }}/>
            </section>
        </main>
    )

}