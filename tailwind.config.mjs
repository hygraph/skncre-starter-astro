/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: "#fff",
        dark: "#333333",
        primary: "#693A25",
        secondary: "#AE9A91",
        tertiary: "#EEE0DB",
      },
      fontFamily: {
        sans: ["Inter"],
        title: ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
};
