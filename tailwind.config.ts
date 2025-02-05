import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#042675",
        nav: "#4a415c",
        option_hover: '#1f53d7',
        option: '#212121',
        option_background: '#ebf5ff'
      },
    },
  },
  plugins: [],
} satisfies Config;
