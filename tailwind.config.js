const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    padding: ['responsive', 'first'],
    backgroundColor: ['hover', 'focus', 'odd'],
  },
  plugins: [require('@tailwindcss/ui')],
}
