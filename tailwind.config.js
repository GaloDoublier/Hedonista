
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
        "primary": ['cinzel', 'serif'],
        "secondary": ["spicyRice", 'serif'],
      },
      colors:{
        "primary":"#0A3626",
        "secondary":"#000"
      },
      backgroundImage: {
        'hero': "url('/assets/hero-main1.jpg')",
        'espacio': "url('/assets/Espacio.jpg')",
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-150%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        slideIn: 'slideIn 3s ease-out infinite',
      },
    },
  },
  plugins: [],
};
