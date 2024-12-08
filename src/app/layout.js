import "./globals.css";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import { SEO } from "@/constants";

export const metadata = {
  title: SEO.title,
  description: SEO.description,
  alternates: {
    canonical: "http://hedonista.com.ar", // URL temporal durante el desarrollo
  },
  keywords: ["eventos ramos mejía", "cata de vino ramos mejía", "taller de ceramica ramos mejía","Te Gales ramos mejía"],
  robots: {
    index: true,
    follow: true,
  },
  author: "Galo Doublier",
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: "https://www.hedonista.com.ar",
    images: [
      {
        url: "https://www.hedonista.com.ar/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: SEO.title,
      },
    ],
  },
};

import { Economica } from "next/font/google"

const Eco = Economica({
  weight: '400',
  subsets: ['latin'],
})


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavBar className={Eco.className}/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

