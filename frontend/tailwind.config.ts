import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      primary:'#fa8a5d',
      dark:{
        border: '#41444e',
        100: '#a1a1a1',
        700: '#282c37',
        800: '#1f2028'
      }
     }
    },
  },
  plugins: [],
};
export default config;
