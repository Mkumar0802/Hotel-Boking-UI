const AnimateCss = require('animated-tailwindcss')


module.exports = AnimateCss(
  { 
    content: [
      "./src/**/*.{js,jsx,ts,tsx,html}",'./node_modules/flowbite/**/*.js','./node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
      fontFamily: {
       mono: "'DM Mono', monospace ",
       rajdhani: "'Rajdhani', sans-serif ",
        oleo:"'Oleo Script Swash Caps', cursive",
        lora:"'Lora', serif",
        roboto:"'Roboto', sans-serif",
        radio: "'Radio Canada', sans-serif",
      },

  
      extend: {},
    },
    plugins: [
     
  ]
  }
)



