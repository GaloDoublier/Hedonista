import Hero from "./sections/Hero";
import Espacio from "./sections/Espacio";
import Servicios from "./sections/Servicios";
import SobreMi from "./sections/SobreMi";
import Testimonios from "./sections/Testimonios";

export default function Home() {
  return (
    <main>
      {/* 1. Hero - Imagen fuerte con nombre y CTA */}
      <Hero />

      {/* 2. Espacio - El lugar donde ocurre la magia */}
      <Espacio />

      {/* 3. Servicios - Listado de servicios ofrecidos */}
      <Servicios />

      {/* 4. Sobre mí - Presentación personal */}
      <SobreMi />

      {/* 5. Testimonios - Lo que dicen las clientas */}
      <Testimonios />
    </main>
  );
}
