const tailwind = require('tailwindcss')
const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'Mark Mead',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
