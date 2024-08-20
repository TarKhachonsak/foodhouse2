/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      fontFamily: {
        'body': ['Scope One'],
        
      },
      textShadow: {
        'md': '3px 3px 0 #fff',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgb(0, 0, 0, 0.7)'
      }
      
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow' : {
          textShadow: `
            3px 3px 0 #fff
          `
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-lg': {
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.75)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

