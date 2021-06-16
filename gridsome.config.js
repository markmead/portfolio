/* eslint-disable */

module.exports = {
  siteName: 'Mark Mead',
  siteUrl: 'https://mead.im',
  icon: './src/favicon.png',
  plugins: [
    { use: '@gridsome/plugin-sitemap' },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: './src/projects/*.md',
        route: '/projects/:path',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './src/blogs/*.md',
        route: '/blog/:path',
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-177960351-3',
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss')],
      },
    },
  },
}
