import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import {DM_Serif_Text} from "next/font/google"
import Eventos from "./sections/Eventos";
import Espacio from "./sections/Espacio";
import Tesimonios from "./sections/Testimonios";

const SerifText = DM_Serif_Text({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={SerifText.className}>
      <Hero/>
      <Nosotros/>
      <Eventos/>
      <Espacio/>
      <Tesimonios/>
    </main>
  );
}
