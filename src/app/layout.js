import "./globals.css";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import { SEO } from "@/constants";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: SEO.title,
  description: SEO.description,
  alternates: {
    canonical: "https://huarteimagen.com",
  },
  keywords: [
    "asesoría de imagen",
    "imagen personal",
    "colorimetría",
    "estilismo",
    "maquillaje profesional",
    "personal shopper",
    "belleza",
    "Buenos Aires",
  ],
  robots: {
    index: true,
    follow: true,
  },
  author: "Huarte Imagen",
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: "https://www.huarteimagen.com",
    images: [
      {
        url: "https://www.huarteimagen.com/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: SEO.title,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased" style={{ backgroundColor: "#FAF8F5", color: "#2C2C2C" }}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
