import { logoIcon } from "@/assets/Icons";
import { whatsapp, facebook, instagram } from "@/assets/Icons";
import { persona1, persona2, persona3 } from "@/assets/Images";

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#espacio", label: "Espacio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/programa", label: "Programa Imagen y Belleza" },
  { href: "/sobre-mi", label: "Sobre mí" },
];

export const nombre = "HUARTE IMAGEN";
export const logo = logoIcon;
export const slogan = "Tu imagen, tu esencia, tu poder";

export const heroSubtitle = "Asesoramiento de imagen personal y belleza";
export const heroCTA = "Reservar consulta";

export const clientes = [
  {
    nombre: "Valeria",
    desc: "Huarte me ayudó a descubrir mi estilo personal. Cada sesión fue un viaje de autoconocimiento donde aprendí a expresar quién soy a través de mi imagen. Su sensibilidad y profesionalismo hacen toda la diferencia.",
    src: persona1,
  },
  {
    nombre: "Claudia",
    desc: "Nunca pensé que un cambio de imagen pudiera transformar tanto mi confianza. Huarte tiene un don especial para ver la belleza única en cada persona y potenciarla con elegancia y buen gusto.",
    src: persona2,
  },
  {
    nombre: "María",
    desc: "La experiencia fue increíble. El espacio transmite calma y cuidado, y el resultado superó mis expectativas. Me siento más segura y auténtica que nunca. Totalmente recomendable.",
    src: persona3,
  },
];

export const SEO = {
  title: `${nombre} | Asesoría de Imagen Personal y Belleza`,
  description:
    "HUARTE IMAGEN es un espacio dedicado a la asesoría de imagen personal, estética y belleza. Descubrí tu estilo único con un acompañamiento profesional, sensible y personalizado. Consultas de imagen, colorimetría, análisis de estilo y más.",
  url: "www.huarteimagen.com",
  src: "{sucursal1}",
};

export const sucursal = {
  name: "Buenos Aires",
  location: "Consultar dirección",
  telefono: "11-6796-7027",
  whatsappNumber: "5491167967027",
};

export const redes = [
  { nombre: "instagram", src: instagram, link: "https://instagram.com/huarteimagen" },
  { nombre: "facebook", src: facebook, link: "https://facebook.com/huarteimagen" },
  { nombre: "whatsapp", src: whatsapp, link: `https://wa.me/${sucursal.whatsappNumber}` },
];

// Textos de la sección Sobre Mí (Home)
export const sobreMi = {
  titulo: "Sobre mí",
  subtitulo: "Huarte",
  descripcion: `Soy asesora de imagen personal y especialista en belleza. Mi trabajo consiste en ayudarte a descubrir y potenciar tu estilo único, acompañándote en un proceso de transformación que va más allá de lo estético.

Creo que la imagen personal es una herramienta poderosa de comunicación y autoexpresión. Cada persona tiene una esencia única que merece ser visible, y mi misión es ayudarte a encontrarla y proyectarla con confianza.`,
};

// Textos de la sección Espacio (Home)
export const espacioSection = {
  titulo: "El espacio",
  descripcion:
    "Un lugar pensado para vos, donde el cuidado y la atención al detalle se respiran en cada rincón. Un ambiente íntimo, cálido y profesional donde tu transformación comienza.",
  cta: "Conocer más",
};

// Programa Imagen y Belleza
export const programa = {
  titulo: "Programa Imagen y Belleza",
  subtitulo: "Transformá tu imagen, potenciá tu carrera",
  descripcion: `Un programa integral diseñado para quienes desean profundizar en el mundo de la imagen personal y la belleza, ya sea para uso personal o profesional.

En este programa aprenderás las herramientas fundamentales para entender cómo la imagen comunica, cómo potenciar la belleza natural y cómo acompañar a otras personas en su proceso de transformación.`,
  paraQuien: {
    titulo: "¿Para quién es este programa?",
    items: [
      "Personas que quieran mejorar su imagen personal",
      "Profesionales de la estética y la belleza",
      "Emprendedores del rubro de moda e imagen",
      "Quienes deseen reinventarse profesionalmente",
    ],
  },
  queAprendes: {
    titulo: "¿Qué vas a aprender?",
    items: [
      "Colorimetría personal y análisis de paletas",
      "Morfología corporal y facial",
      "Estilismo y armado de outfits",
      "Técnicas de maquillaje profesional",
      "Comunicación de imagen y marca personal",
      "Herramientas de asesoría de imagen",
    ],
  },
  beneficios: {
    titulo: "Beneficios profesionales",
    items: [
      "Certificación avalada",
      "Material de estudio completo",
      "Acceso a comunidad exclusiva",
      "Seguimiento personalizado",
      "Recursos para emprender en el rubro",
    ],
  },
  cta: "Inscribirme ahora",
  hotmartLink: "https://hotmart.com/huarteimagen",
};
