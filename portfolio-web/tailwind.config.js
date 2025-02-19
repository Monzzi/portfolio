/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#845ec2", 
        secondary: "#b39cd0", 
        accent: "#00c9a7",  
        background: "#fbeaff", 
    },
  },
},
  plugins: [],
};
