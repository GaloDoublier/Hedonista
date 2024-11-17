"use client"
import Image from "next/image"
import { NosotrosImg } from "@/assets/Images"
import { usePathname } from 'next/navigation'; 

const Nosotros = () => {

  const pathname = usePathname();

  const titulo = () => {
    if(pathname === "/"){
      return <h2 className="text-6xl text-center py-10">&quot;Filosofia <span className="text-primary font-bold">Hedonista&quot;</span></h2>
    }
    else{
      return <h1 className="text-6xl text-center py-10">&quot;Filosofia <span className="text-primary font-bold">Hedonista&quot;</span></h1>
    }
  }


  return (
    <section className="padding max-container">
          {titulo()}
        <div className="flex max-lg:flex-col">
          <div className="flex felx-1 flex-col justify-center items-start">
            
            <p className=" leading-10 text-2xl justify-center items-center w-4/4 ">
            En <span className="text-primary font-bold">Hedonista</span>, creemos que la vida está hecha para disfrutar. Nuestro espacio, diseñado para ofrecer <span className="text-primary font-bold">comodidad y tranquilidad</span>, es el lugar ideal donde las personas se unen y celebran <span className="text-primary font-bold">momentos especiales</span>. Cada evento se convierte en una oportunidad para conectar, relajarse y crear <span className="text-primary font-bold">recuerdos inolvidables</span>, en un ambiente que refleja la alegría de estar juntos.
            </p>
  
          </div>
            
            <Image height={360} width={700}  alt="nosotros" className="mx-auto p-0 sm:p-12" src={NosotrosImg}></Image>
        </div>
    </section>
  )
}

export default Nosotros