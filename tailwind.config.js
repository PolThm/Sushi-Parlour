// import './src/scssLibs/fonts.css';

module.exports = {
  purge: [
    './src/**/*.jsx',
    './src/**/*.js',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        SPGreen: '#afc67b',
        SPGray: '#4f4e4e'
      },
      backgroundColor: {
        SPGreen: '#afc67b',
        SPDarkGreen: '#4d5342',
        SPDarkGray: '#212121'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'goodDog': ['goodDog'],
        'goodDogCool': ['goodDogCool'],
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderStyle: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
