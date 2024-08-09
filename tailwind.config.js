/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'Mate': ['Mate'],
        'NewsReader': ['Newsreader'],
        'Arvo': ['Arvo'],
        'RobotoSerif': ['Roboto Serif'],
        'Slabo': ['Slabo 13px'],
      },

      gridTemplateColumns: {
        '70/30': '70%, 28%',
      }
    },
  },

  variants: {
    extend: {

    },
  },
  plugins: [],
}

