import {ceramica,catadevinos,catasdecervezas,maquillajeymerienda,tarotyvino,tarotymerienda,personalizado} from "@/assets/Images";
import {ceramica1,catadevinos1,catasdecervezas1,maquillajeymerienda1,tarotyvino1,tarotymerienda1,juan} from "@/assets/Images";
import {ceramica2,catadevinos2,catasdecervezas2,carlos,tarotyvino22,tarotymerienda22,personalizado2} from "@/assets/Images"


export const eventos = [
  {
    nombre: "Cata de vinos",
    slug: "cata-de-vinos",
    descripcion: "Disfruta de una selección exclusiva de vinos.",
    explicacion: "Embárcate en un viaje sensorial con nuestra cata de vinos, donde cada copa cuenta una historia única. Guiado por un experto sommelier, descubrirás los matices y secretos detrás de vinos seleccionados cuidadosamente. Aprenderás sobre sus orígenes, aromas y sabores, y cómo cada uno de ellos aporta a la experiencia global. Desde tintos robustos hasta blancos frescos, esta experiencia está diseñada para satisfacer tanto a aficionados como a conocedores. Un momento ideal para relajarte y disfrutar en buena compañía, mientras amplías tus conocimientos sobre el mundo vitivinícola.",
    precio: "22,500",
    duracion: "2 horas",
    material: "Vinosde alta calidad",
    src: catadevinos,
    srcExtra: [catadevinos1, catadevinos2],
    ubicacion: "Ramos Mejía"
  },
  {
    nombre: "Cata de cerveza",
    slug: "cata-de-cerveza",
    descripcion: "Explora una variedad de cervezas artesanales.",
    explicacion: "Descubre el fascinante mundo de la cerveza artesanal a través de una cata exclusiva. En este evento, aprenderás sobre los diferentes estilos y procesos de elaboración, guiado por un experto cervecero que compartirá sus conocimientos y pasión. Degustarás variedades locales y extranjeras, con un enfoque en los sabores y aromas que las hacen únicas.",
    precio: "22,500",
    duracion: "1.5 horas",
    material: "Cervezas artesanales",
    src: catasdecervezas,
    srcExtra: [catasdecervezas1, catasdecervezas2],
    ubicacion: "Ramos Mejía"
  },
  {
    nombre: "Cerámica",
    slug: "ceramica",
    descripcion: "Crea piezas de cerámica artesanal.",
    explicacion: "Descubre el arte de la cerámica en un taller diseñado para liberar tu creatividad. Bajo la guía de expertos, aprenderás las técnicas básicas del modelado de arcilla, desde la preparación del material hasta la creación de tus propias piezas. Este espacio está diseñado para fomentar la expresión artística en un ambiente acogedor, donde podrás dejar volar tu imaginación. Cada participante podrá experimentar con diferentes formas y estilos, creando obras que reflejan su personalidad. Al finalizar, llevarás contigo no solo tus creaciones, sino también nuevos conocimientos y habilidades en este hermoso arte.",
    precio: "30,000",
    duracion: "3 horas",
    material: "Arcilla y herramientas",
    src: ceramica,
    srcExtra: [ceramica1, ceramica2],
    ubicacion: "Ramos Mejía"
  },
  {
    nombre: "Maquillaje y merienda",
    slug: "maquillaje-y-merienda",
    descripcion: "Aprende técnicas de maquillaje mientras disfrutas de una merienda.",
    explicacion: "Únete a un taller de maquillaje donde aprenderás los secretos para realzar tu belleza de manera efectiva. Durante la actividad, disfrutarás de una merienda deliciosa mientras un experto te mostrará técnicas útiles para tu rutina diaria. Este evento es ideal para quienes desean mejorar sus habilidades de maquillaje, ya sea para uso diario o para ocasiones especiales. Se abordarán temas como el cuidado de la piel, elección de colores y técnicas de aplicación. Todo esto en un ambiente amigable y relajado, donde cada participante podrá practicar y hacer preguntas.",
    precio: "20,000",
    duracion: "2 horas",
    material: "Maquillaje y productos de belleza",
    src: maquillajeymerienda,
    srcExtra: [maquillajeymerienda1, carlos],
    ubicacion: "Ramos Mejía"
  },
  {
    nombre: "Tarot y vino",
    slug: "tarot-y-vino",
    descripcion: "Descubre tu futuro mientras disfrutas de un buen vino.",
    explicacion: "Disfruta de una sesión de tarot acompañada de una copa de vino, en un ambiente acogedor y místico. Un tarotista profesional te guiará a través de las cartas, ofreciendo insights y reflexiones sobre tu vida. Mientras degustas vinos selectos, podrás profundizar en tus inquietudes y esperanzas. Esta experiencia está diseñada para combinar la introspección con la relajación, haciendo que cada momento sea significativo. Es una oportunidad perfecta para explorar tu futuro y disfrutar de una experiencia sensorial completa que combina sabores y reflexiones.",
    precio: "25,000",
    duracion: "1.5 horas",
    material: "Tarot y vinos seleccionados",
    src: tarotyvino,
    srcExtra: [tarotyvino1, tarotyvino22],
    ubicacion: "Ramos Mejía"
  },
  {
    nombre: "Tarot y merienda",
    slug: "tarot-y-merienda",
    descripcion: "Disfruta de una merienda mientras te leen las cartas.",
    explicacion: "Sumérgete en una experiencia mística con una lectura de tarot mientras disfrutas de una merienda. Este taller está diseñado para quienes buscan una tarde relajante y llena de introspección, donde cada lectura se complementa con un delicioso menú. Ideal para compartir con amigos o para disfrutar de un momento personal, podrás reflexionar sobre tu vida en un entorno acogedor. La combinación de sabores y cartas te permitirá explorar tus pensamientos y emociones en un espacio seguro y amigable.",
    precio: "40",
    duracion: "1.5 horas",
    material: "Tarot, merienda",
    src: tarotymerienda,
    srcExtra: [tarotymerienda1, tarotymerienda22],
    ubicacion: "Ramos Mejía"
  },
  {
    nombre: "Personalizado",
    slug: "personalizado",
    descripcion: "Crea un evento a medida para ti y tus amigos.",
    explicacion: "Ofrecemos la posibilidad de crear eventos a medida, diseñados exclusivamente para ti y tus necesidades. Desde la selección del catering hasta la decoración personalizada, nos encargamos de cada detalle para que tu evento sea inolvidable. Este servicio incluye asesoramiento para crear una experiencia única y memorable, adaptada a tus gustos y preferencias. Ya sea para una celebración especial o un encuentro íntimo, estamos aquí para hacer realidad tu visión y asegurar que todo salga a la perfección.",
    precio: "Consultar",
    duracion: "Variable",
    material: "Variable",
    src: personalizado,
    srcExtra: [juan, personalizado2],
    ubicacion: "Ramos Mejía"
  }
];

  