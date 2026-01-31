/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-cormorant)", "serif"],
        secondary: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        // Paleta elegante y femenina
        primary: "#C4A484", // Nude/Camel dorado
        "primary-dark": "#A68B6A", // Nude más oscuro
        secondary: "#2C2C2C", // Negro suave para texto
        accent: "#D4AF37", // Dorado sutil
        background: "#FAF8F5", // Marfil cálido
        "background-alt": "#F5F0EA", // Beige claro
        muted: "#8B7355", // Marrón suave
        "muted-light": "#C9B99A", // Beige intermedio
        rose: "#E8D5D5", // Rosa empolvado
        "rose-dark": "#C4A5A5", // Rosa más intenso
      },
      backgroundImage: {
        hero: "url('/assets/hero-main1.jpg')",
        espacio: "url('/assets/Espacio.jpg')",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-150%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 3s ease-out infinite",
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
