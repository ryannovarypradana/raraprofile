import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'laundry-blue': '#4A90E2',
        'laundry-blue-dark': '#357ABD',
        'laundry-blue-light': '#F0F8FF',
        'laundry-gray-dark': '#333333',
        'laundry-gray': '#666666',
        'laundry-gray-light': '#F5F5F5',
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
} satisfies Config;

const daisyuiConfig = {
  themes: ["light"], // Atur tema default daisyUI
  base: true,
  styled: true,
  utils: true,
};

export default config;