/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1100px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightBlue: "hsl(215.02, 98.39%, 51.18%)",
        darkBlue: "hsl(213.86, 58.82%, 46.67%)",
        lightGreen: "hsl(156.62, 73.33%, 58.82%)",
        gray: { 100: "#aaaaaa", 200: "#323232", 300: "#212121" },
        lightgrey: "#dddddd",
        white: "#fff",
        cyan: "#14ffec",
        red: "#d6436e",
        red2: '#dc2626',
        green2: "#25da72",
        green: "#33cc66",   
        orange: " #fc5b23",
        orange2: "#e62e00",
        orange3: "#e65400",
        blue: "#03172C",   
        blue2: "#18395B",
        grey: "#666",
        darkgrey: "#2f2f2f",
        darkgrey2: "#181818",
        black2: "#080b0c",
      },
      fontSize: {
        sm: "14px", 
        md: "18px", 
        lg: "24px", 
        xl: "32px", 
        xxl: "40px",
        base: "16px",
      },
      fontFamily:{ audiowide: "AudioWide"},

      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};