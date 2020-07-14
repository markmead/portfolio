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
        primary: '#4A43F8',
      },
    },
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
}
