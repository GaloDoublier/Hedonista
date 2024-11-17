import ButtonPrimary from "../ButtonPrimary"
import Link from "next/link"

const SlideText = ({nombre,descripcion,href}) => {
  return (
    <>
    <div className="flex gap-8 lg:gap-0 flex-col lg:flex-row absolute top-2/3 px-8 justify-between w-full">
      <h3 className=" text-white text-4xl xl:text-6xl z-50 ">{nombre}</h3>
      <Link className="z-50" href={`/eventos/${href}`}><ButtonPrimary className="w-32" text="mas info"/></Link>
    </div>
    <h4 className=" absolute text-white text-xl z-50 top-[80%] left-14 hidden lg:block">{descripcion}</h4>

    </>
  )
}

export default SlideText