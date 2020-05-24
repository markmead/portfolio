const tailwind = require('tailwindcss')

const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
