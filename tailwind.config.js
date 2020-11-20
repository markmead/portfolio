const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/**/*.vue', './src/content/**/*.md'],
    options: {
      safelist: ['prose', 'prose-lg', 'h2', 'h3', 'h4', 'p', 'a', 'ul', 'li', 'strong'],
    },
  },
  darkMode: false,
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.800'),
          a: {
            textDecoration: 'none',
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
