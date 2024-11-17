import Image from "next/image"
const DetallesCard = ({detalle,logo}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
        <Image alt={detalle} height={135} width={135} src={logo}></Image>
        <h4 className="text-4xl font-montserrat text-center">{detalle}</h4>
    </div>
  )
}

export default DetallesCard