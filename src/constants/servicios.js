import {
  ceramica,
  catadevinos,
  catasdecervezas,
  maquillajeymerienda,
  tarotyvino,
  tarotymerienda,
  personalizado,
} from "@/assets/Images";
import {
  ceramica1,
  catadevinos1,
  catasdecervezas1,
  maquillajeymerienda1,
  tarotyvino1,
  tarotymerienda1,
  juan,
} from "@/assets/Images";
import {
  ceramica2,
  catadevinos2,
  catasdecervezas2,
  carlos,
  tarotyvino22,
  tarotymerienda22,
  personalizado2,
} from "@/assets/Images";

export const servicios = [
  {
    nombre: "Asesoría de Imagen Personal",
    slug: "asesoria-imagen-personal",
    descripcion: "Descubrí tu estilo único y aprendé a comunicar quién sos a través de tu imagen.",
    explicacion: `La asesoría de imagen personal es un proceso de autoconocimiento donde trabajamos juntas para descubrir tu estilo único. Analizamos tu morfología, colorimetría y personalidad para crear una imagen que te represente auténticamente.

Durante las sesiones exploraremos tu guardarropa actual, identificaremos qué prendas potencian tu figura y definiremos un plan de acción para construir un armario funcional y versátil.

El objetivo es que te sientas segura y auténtica, proyectando una imagen coherente con tu esencia en cada aspecto de tu vida.`,
    beneficios: [
      "Análisis de colorimetría personal",
      "Estudio de morfología corporal",
      "Revisión y organización del guardarropa",
      "Guía de compras personalizada",
      "Combinaciones y outfits sugeridos",
    ],
    duracion: "2-3 sesiones",
    src: catadevinos,
    srcExtra: [catadevinos1, catadevinos2],
  },
  {
    nombre: "Colorimetría",
    slug: "colorimetria",
    descripcion: "Conocé tu paleta de colores ideal para lucir radiante y armoniosa.",
    explicacion: `El análisis de colorimetría es una herramienta fundamental para entender qué colores te favorecen según tu tono de piel, ojos y cabello. Descubrirás tu estación cromática y aprenderás a usar los colores a tu favor.

Trabajaremos con drapeados y comparativas para identificar tu paleta ideal, entendiendo cómo los colores pueden iluminar tu rostro, armonizar tu imagen y transmitir diferentes mensajes.

Al finalizar, tendrás tu paleta personalizada y las herramientas para elegir colores que te hagan brillar en tu ropa, maquillaje y accesorios.`,
    beneficios: [
      "Test de colorimetría completo",
      "Identificación de tu estación cromática",
      "Paleta de colores personalizada",
      "Guía de combinaciones ideales",
      "Consejos para maquillaje según tu paleta",
    ],
    duracion: "1 sesión de 2 horas",
    src: catasdecervezas,
    srcExtra: [catasdecervezas1, catasdecervezas2],
  },
  {
    nombre: "Maquillaje Profesional",
    slug: "maquillaje-profesional",
    descripcion: "Realzá tu belleza natural con técnicas profesionales adaptadas a vos.",
    explicacion: `El servicio de maquillaje profesional está pensado para ocasiones especiales o para quienes desean aprender técnicas que potencien su belleza natural. Cada maquillaje es único y diseñado especialmente para vos.

Trabajamos respetando tus rasgos, tu estilo personal y la ocasión. Ya sea un evento formal, una sesión de fotos o tu día a día, el objetivo es que te veas y te sientas hermosa.

También ofrecemos clases de automaquillaje donde aprenderás las técnicas básicas para recrear looks que se adapten a tu rutina y personalidad.`,
    beneficios: [
      "Maquillaje para eventos especiales",
      "Clases de automaquillaje",
      "Técnicas adaptadas a tu tipo de rostro",
      "Productos recomendados según tu piel",
      "Tips para un maquillaje duradero",
    ],
    duracion: "1-2 horas",
    src: maquillajeymerienda,
    srcExtra: [maquillajeymerienda1, carlos],
  },
  {
    nombre: "Personal Shopper",
    slug: "personal-shopper",
    descripcion: "Acompañamiento en compras para armar un guardarropa estratégico y funcional.",
    explicacion: `El servicio de Personal Shopper es un acompañamiento personalizado para que tus compras sean inteligentes y alineadas con tu estilo. Juntas recorremos tiendas seleccionadas según tu presupuesto y necesidades.

Antes de la salida, analizamos tu guardarropa actual y definimos qué prendas necesitás para completarlo. Durante la sesión, te guiaré para elegir piezas versátiles que se adapten a tu vida y estilo.

El objetivo es que cada compra sume a tu imagen, evitando gastos innecesarios y construyendo un armario cápsula que funcione para vos.`,
    beneficios: [
      "Análisis previo de necesidades",
      "Selección de tiendas según presupuesto",
      "Acompañamiento en probador",
      "Asesoramiento en tiempo real",
      "Optimización del guardarropa existente",
    ],
    duracion: "3-4 horas",
    src: ceramica,
    srcExtra: [ceramica1, ceramica2],
  },
  {
    nombre: "Asesoría Express",
    slug: "asesoria-express",
    descripcion: "Una consulta breve para resolver dudas puntuales sobre tu imagen.",
    explicacion: `La asesoría express es perfecta si tenés una duda puntual o necesitás orientación rápida sobre tu imagen. En una sesión corta trabajamos sobre un tema específico que te preocupe.

Puede ser elegir el outfit para un evento importante, definir un cambio de look, resolver dudas sobre combinaciones o recibir feedback sobre tu imagen actual.

Es una opción accesible para dar el primer paso en el cuidado de tu imagen personal sin comprometerte con un proceso completo.`,
    beneficios: [
      "Consulta rápida y efectiva",
      "Respuestas a dudas puntuales",
      "Orientación para eventos específicos",
      "Feedback de imagen actual",
      "Primer paso hacia tu transformación",
    ],
    duracion: "45 minutos",
    src: tarotyvino,
    srcExtra: [tarotyvino1, tarotyvino22],
  },
  {
    nombre: "Paquete Transformación Completa",
    slug: "transformacion-completa",
    descripcion: "Un proceso integral que combina todos los servicios para una transformación total.",
    explicacion: `El paquete de transformación completa es la experiencia más integral que ofrezco. Incluye asesoría de imagen, colorimetría, sesión de personal shopper y clase de automaquillaje.

Es un proceso de varias sesiones donde trabajamos juntas en todos los aspectos de tu imagen externa. Desde los colores que te favorecen hasta cómo vestirte y maquillarte para expresar tu mejor versión.

Ideal para quienes buscan un cambio profundo y quieren invertir en su imagen como herramienta de transformación personal y profesional.`,
    beneficios: [
      "Todos los servicios incluidos",
      "Descuento especial por paquete",
      "Seguimiento personalizado",
      "Material de apoyo exclusivo",
      "Sesión de cierre y planificación",
    ],
    duracion: "6-8 sesiones",
    src: personalizado,
    srcExtra: [juan, personalizado2],
  },
];
