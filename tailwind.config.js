const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
        display: ['Grifter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#191919',
        white: '#EAEAEA',
        yellow: '#F7D72E',
        blue: '#1493E6',
        pink: '#C9355D',
        green: '#7FC935',
      },
    },
  },
  variants: {
    opacity: ['hover', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui')],
}
