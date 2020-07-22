const tailwind = require('tailwindcss')
const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'Mark Mead',
  siteUrl: 'https://mead.im',
  icon: './src/favicon.svg',
  plugins: [
    { use: '@gridsome/plugin-sitemap' },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: './src/content/project/*.md',
        route: '/work/:path',
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
