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
        path: './src/content/projects/*.md',
        route: '/projects/:path',
      },
    },
    {
      use: 'gridsome-plugin-manifest',
      options: {
        background_color: '#FFF',
        icon_path: './src/favicon.png',
        name: 'Mark Mead Portfolio',
        short_name: 'Mark Mead',
        theme_color: '#000',
        lang: 'en',
      },
    },
    {
      use: 'gridsome-plugin-service-worker',
      options: {
        networkFirst: {
          cacheName: 'nf-v1',
          routes: ['/', /\.(js|css|png)/],
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-177960351-3',
      },
    },
  ],
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [require('tailwindcss')],
  //     },
  //   },
  // },
}
