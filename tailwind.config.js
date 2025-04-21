/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   'mobile': '360px',
    //   'tablet': '768px',
    //   'desktop': '1300px'
    // },
    extend: {
      screens: {
        'sm': '600px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1320px',

        'resume-md': '800px'
      },
      colors: {
        primary: '#27272A',
        secondary: '#3F3F46',
        'primary-resume': '#030712',
        'secondary-resume': '#030712CC',
        'base-color': '#FAFAFA',
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}

