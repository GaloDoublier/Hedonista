import Image from "next/image"
import { Espacio1,Espacio2,Espacio3,Espacio14,Espacio5 } from "@/assets/Images"

const ImageGrid = () => {
  return (
<section className="padding max-container">
  <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6">
    <Image
      src={Espacio1}
      alt="Descripción 1"
      className="grid-image col-span-2  row-span-1 object-cover h-[600px] w-full" // Cambia h-1/2 a h-60 o prueba con h-auto
    />
    <Image
      src={Espacio2}
      alt="Descripción 2"
      className="grid-image col-span-2  row-span-1 object-cover h-[600px] w-full" // Cambia h-1/2 a h-60 o prueba con h-auto
    />
    <Image
      src={Espacio5}
      alt="Descripción 3"
      className="grid-image col-span-4 hidden md:block row-span-1 object-cover h-[600px] w-full" // Cambia a una altura más grande si es necesario
    />
    <Image
      src={Espacio14}
      alt="Descripción 4"
      className="grid-image col-span-2 row-span-1 object-cover h-[600px] w-full" // Cambia h-1/2 a h-60 o prueba con h-auto
    />
    <Image
      src={Espacio3}
      alt="Descripción 5"
      className="grid-image col-span-2 hidden md:block row-span-1 object-cover h-[600px] w-full" // Cambia h-1/2 a h-60 o prueba con h-auto
    />
  </div>
</section>

  )
}

export default ImageGrid