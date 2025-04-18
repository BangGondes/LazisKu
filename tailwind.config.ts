// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotoMono: ['"Roboto Mono"', "monospace"],
        lexend: ["Lexend", "sans-serif"],
        lexendDeca: ['"Lexend Deca"', "sans-serif"],
        lexendGiga: ['"Lexend Giga"', "sans-serif"],
        lexendMega: ['"Lexend Mega"', "sans-serif"],
        lexendPeta: ['"Lexend Peta"', "sans-serif"],
        lexendTera: ['"Lexend Tera"', "sans-serif"],
        lexendZetta: ['"Lexend Zetta"', "sans-serif"],
      },
    },
  },
  // pastikan ini juga:
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // <- ini penting untuk App Router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // kalau kamu pakai folder src
  ], 
};
