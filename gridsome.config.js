const tailwind = require('tailwindcss')
const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'Mark Mead',
  siteUrl: 'https://mead.im',
  icon: './src/favicon.svg',
  plugins: [{ use: 'gridsome-plugin-pug' }, { use: '@gridsome/plugin-sitemap' }],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
