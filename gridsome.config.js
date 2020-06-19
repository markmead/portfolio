const tailwind = require('tailwindcss')
const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'Mark Mead',
  siteUrl: 'https://mead.im/',
  plugins: [{ use: 'gridsome-plugin-pug' }, { use: '@gridsome/plugin-sitemap' }],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
