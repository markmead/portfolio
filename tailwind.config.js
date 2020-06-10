const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
        serif: ['Vidaloka', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
