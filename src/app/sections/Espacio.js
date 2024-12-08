import Link from "next/link"
import ButtonPrimary from "../components/ButtonPrimary"

const Espacio = () => {
  return (
    <section className="w-full h-[65vh] bg-espacio bg-cover bg-center bg-fixed">
      <div className="flex flex-col justify-center items-center h-[65vh] gap-20 bg-black bg-opacity-50">
        <p className="text-white relative text-center text-2xl w-2/3 sm:text-6xl">&quot;Crea recuerdos en un espacio 100% pensado para ti.&quot;</p>
        <Link href="/nosotros#espacio"><ButtonPrimary text="Ver Espacio" className=""/></Link>
      </div>
    </section>
  )
}

export default Espacio