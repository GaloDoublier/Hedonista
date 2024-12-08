import { nombre} from "@/constants"
import Image from "next/image"
import { redes } from "@/constants"
import { sucursal } from "@/constants"
import { eventos } from "@/constants/eventos"
import Link from "next/link"


const Footer = () => {
  return (
    <footer id="contacto" className=" bg-primary pb-8">
      <div className="padding">
          <div className=" flex max-lg:flex-col justify-around items-start max-container text-gray-100">

          <div className="flex flex-col">
                    <h3 className="flex-1 text-[50px] py-2 font-primary">Eventos</h3>
                    <ul className="flex flex-col gap-2" >
                      {eventos.map((evento)=>(
              
                        <li key={evento.nombre} className="opacity-75 text-white underline underline-offset-2 hover:opacity-100 text-xl"><Link  href={`/eventos/${evento.slug}`}>{evento.nombre}</Link></li>
                      ))}
                    </ul>
                  </div>


          <div 
                  key={sucursal.name}
                  className="flex flex-col">
                    <h3 className="flex-1 text-[60px] font-primary ">Contacto</h3>
                    <ul className="text-xl font-sans">
                    <li className="mb-5 font-semibold">Dirección: {sucursal.name}, {sucursal.location}</li>
                    <li className="mb-5 font-semibold">Teléfono: {sucursal.telefono}</li>
                    </ul>
                  </div>
                 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.6541040501884!2d-58.55847712391149!3d-34.63818035931963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7e2c7c1e7b5%3A0xd4f265e09242fac4!2sLorenzo%20Barcala%20668%2C%20B1704%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1726618032362!5m2!1ses-419!2sar" className="w-[300px] h-[200px] sm:w-[500px] sm:h-[350px] border-0"loading="lazy" ></iframe>
                

          </div>
        </div>
        <div className="flex justify-between px-10">
          <div className="text-gray-300">
          <p>© 2024 {nombre}.</p>
          {/* en un futuro cuando tengamos la pagina de la empresa */}
          <p>sitio web desarrollado por: GDS</p>
          </div>
          <div className="flex gap-3 sm:gap-10 items-center justify-center">
            {redes.map((red,index)=>(
              <a key={index} href={red.link}><Image alt={red.nombre} className="hover:opacity-30 transition-all ease-in-out duration-300 cursor-pointer" height={30} width={30} src={red.src}/></a>
            ))}
          </div>
        </div>
        
    </footer>
  )
}

export default Footer