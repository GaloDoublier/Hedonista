import { eventos } from "@/constants/eventos"
import EmblaCarousel from "../components/Carousel/EmblaCarousel"
import "../components/Carousel/css/embla.css"

const Eventos = () => {
  return (
    <section className="padding-b">
        <h2 className="text-6xl text-center">Nuestros <span className="text-primary">Eventos</span></h2>
        <EmblaCarousel pictures={eventos} slides={Array.from( { length: eventos.length }, (_, i) => i)} options={{loop: true }}/>
    </section>
  )
}

export default Eventos