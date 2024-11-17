import TestimonioCard from "../components/TestimonioCard"
import { clientes } from "@/constants"

const Testimonios = () => {
  return (
    <section className="w-full padding max-container">
        <h2 className="text-6xl text-center pb-20">No lo decimos nosotros, <span className="text-primary">lo dicen ellos</span></h2>
        <div className={"flex flex-col lg:flex-row gap-8"}>
          {clientes.map((testimonio,index)=>(
              <TestimonioCard key={index} {...testimonio}/>
          ))}
        </div>
    </section>
  )
}

export default Testimonios