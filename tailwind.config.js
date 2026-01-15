/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "600px",
        md: "768px", // tablets
        lg: "1024px", // tablets grandes / laptops
      },
    },
  },
};
