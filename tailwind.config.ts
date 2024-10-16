import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      averia: ["Averia Sans Libre"],
    },
    boxShadow: {
      'custom-light': '0 0 10px #313131', 
      'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c'
    },
    extend: {
      colors: {
        greenn: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        }
      },
    },
  },
  varients: {
    extend: {
      boxShadow: ['dark']
    }
  },
  plugins: [],
};
export default config;
