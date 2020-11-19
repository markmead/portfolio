const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false,
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.800'),
          a: {
            position: 'relative',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'none',
            },
          },
          strong: {
            fontWeight: theme('fontWeight.medium'),
          },
        },
      },
    }),
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
