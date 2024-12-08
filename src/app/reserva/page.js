import FormularioReserva from "../components/FormularioReserva"
import {Inter} from "next/font/google"


const SerifText = Inter({
  weight: '400',
  subsets: ['latin'],
})

export default function Page() {

  return (
    <main className={`${SerifText.className} bg-espacio bg-cover`}>
        <section className="max-container padding">
            <h1 className="text-6xl text-center py-16 text-white">Reserva <span className="text-primary">ahora</span></h1>
            <div className=" h-[70vh] w-full flex justify-center items-center">
                <FormularioReserva/>
            </div>

        </section>
    </main>
  )
}