/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors:{
        card:"#ECDFCC",
        main:'#697565'
      },
      boxShadow:{
        customShadow:'0px 0px 15px -8px '
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
