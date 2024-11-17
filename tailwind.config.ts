import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        // Dark Mode Colors
        dark: {
          background: "#161616", 
          darker: "#0D0D0D",    
        },
        // Light Mode Colors
        light: {
          background: "#f7fafc", 
          lighter: "#ffffff",   
        },
        // Common Colors
        primary: "#605BFF",   
        text: {
          slate: "#B0B0B0", 
        },
      },
    },
  },
  plugins: [],
};

export default config;
