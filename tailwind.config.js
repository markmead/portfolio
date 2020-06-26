const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/**/*.vue'],
    options: {
      whitelist: ['content-wrapper'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        serif: ['Vidaloka ', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: '#4A43F8',
      },
    },
  },
  plugins: [require('@tailwindcss/ui')],
}
