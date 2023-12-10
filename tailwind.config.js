/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#17181D",
        primary: "#FFF5F5", // bg #E0FBFC
        secondary: "#052c63", // texto de description, #3D5A80
        tertiary: "#FF6E80", // cuadritos- rosado fuerte #EF798A #EE964B #FF6E80
        cuaternary: "#FFF5F5", // form #FFCCCC #E5958E #FFF5F5 #FFA4B6
        quinary: "#321e45", // ttulos de cda seccion
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#573f71", // #f3f3f3
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      backgroundImageMery: {
        "mery-pattern": "url('/src/assets/merybg.png')",
      },
    },
  },
  plugins: [],
}

