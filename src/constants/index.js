import { logoIcon } from "@/assets/Icons";
import { whatsapp,facebook,instagram } from "@/assets/Icons"
import { persona1,persona2,persona3 } from "@/assets/Images";


export const navLinks = [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/eventos", label: "Eventos" },
    { href: "#contacto", label: "Contacto" },
];

export const nombre = "Hedonista"
export const logo = logoIcon
export const slogan = "Cada evento es único, cada experiencia inolvidable"



export const clientes = [
    {nombre:"Valeria", desc:"La experiencia en la cata de vinos fue simplemente espectacular. Cada detalle estaba perfectamente cuidado, desde la selección de vinos hasta la explicación del sommelier.", src:persona1},
    {nombre:"Claudia", desc:`Participé en el taller de cerámica y fue una tarde mágica. Nunca pensé que algo tan sencillo como moldear arcilla pudiera ser tan relajante y divertido. La atención personalizada y el ambiente cálido hacen que Hedonista sea inolvidable.`, src:persona2},
    {nombre:"Maria", desc:"Hice un evento personalizado para el cumpleaños de mi mamá, y no puedo estar más feliz con el resultado. Desde el catering hasta la decoración, todo fue perfecto.", src:persona3}
]

export const SEO = {
    title:`${nombre} Eventos | Ramos Mejía`,
    description:"Hedonista es un espacio en Ramos Mejía dedicado a crear eventos inolvidables: catas de vino, talleres de cerámica, tés galeses y experiencias personalizadas. Celebra la vida con nosotros y transforma cada ocasión en un viaje sensorial. Organizamos eventos para todas las ocasiones, adaptándonos a tus deseos.",
    url:"www.hedonista.com.ar",
    src:"{sucursal1}"//poner url imagen principal
}

export const sucursal={
    name:"Ramos Mejia",
    location:"Barcala 668",
    telefono:"11-6796-7027"
}


export const redes = [
    {nombre:"instagram", src:instagram, link:""},
    {nombre:"facebook", src:facebook, link:""},
    {nombre:"whatsapp", src:whatsapp, link:""}
]









//eventosss
