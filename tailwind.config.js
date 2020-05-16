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
    color: ['hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui')],
}
