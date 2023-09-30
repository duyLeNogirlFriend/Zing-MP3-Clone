/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#e7ecec',
        'main-200': '#dde4e4',
        'main-300': '#ced9d9',
        'main-400': '#c0d8d8',
        'main-500': '#0e8080',
        'overlay-30' : 'rgba(0,0,0,0.3)'
      },

      textColor: {
        'main-100': '#e7ecec',  
        'main-200': '#dde4e4',
        'main-300': '#ced9d9',
        'main-400': '#c0d8d8',
        'main-500': '#0e8080',
      },

      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'rotate-center': {
          '0%': {
            '-webkit-transform': 'rotate(0);',
            transform: 'rotate(0);',
            'transition' : '0.8s;'
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg);',
            transform: 'rotate(360deg);',
           
          }
        },
        'rotate-center-pause': {
          '0%': {
            '-webkit-transform': 'rotate(360deg);',
            transform: 'rotate(0);',
            'border-radius' : '99999px',
            'transition' : '0.8s;'
            
          },
          '100%': {
            '-webkit-transform': 'rotate(0);',
            transform: 'rotate(360deg);'
          }
        },
        
      },
        animation: {
          'slide-right' : 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',  
          'slide-left' : 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
          'slide-left-2' : 'slide-right2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
          'rotate-center': 'rotate-center 10s linear infinite',
          'rotate-center-pause': 'rotate-center-pause 0.5s linear 1 both'      
        }
    },
    screens: {
      '1600' : '1600px'
    },
   
  },
  plugins: []
};

