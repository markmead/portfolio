module.exports = {
  purge: {
    content: ['./src/**/*.vue'],
    options: {
      whitelist: ['content-wrapper'],
    },
  },
  theme: {
    extend: {
      colors: {
        'cool-gray': '#DDDDDD',
        'cool-gray-dark': '#C9C9C9',
        'cool-gray-text': '#535353',
        'cool-blue': '#75C8F4',
        'cool-blue-dark': '#3F8AD5',
        'subtitle-gray': '#727272',
      },
    },
  },
  variants: {
    textOpacity: ['hover', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
}
