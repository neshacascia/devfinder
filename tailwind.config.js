/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        lightBg: '#F6F8FF',
        darkBg: '#141D2F',
        darkText: '#222731',
        blueGray: '#4B6A9B',
        blue: '#0079FF',
        box: 'FEFEFE',
        gray: '#2B3442',
        body: '#697C9A',
        idle: 'rgb(167, 179, 202)',
      },
      fontFamily: {
        display: ['Space Mono'],
      },
      width: {
        avatar: '70px',
      },
      height: {
        avatar: '70px',
      },
      boxShadow: {
        box: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567);',
      },
    },
  },
  plugins: [],
};
