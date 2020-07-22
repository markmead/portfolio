<template>
  <Layout>
    <div class="flex items-end min-h-screen py-12 bg-no-repeat bg-cover bg-image about-gradient">
      <div class="max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">About</h1>
          <div class="mt-4 font-medium prose prose-lg text-black text-opacity-75 sm:prose-xl">
            <p>
              I'm a 23 year old full stack web developer in Essex, UK. I've been building websites for over 4 years,
              ranging from quote engines, brochure sites, geolocating services, event management and eCommerce.
            </p>
            <p>
              The tech stack I use the most is; Ruby on Rails, Stimulus, Alpine and Tailwind. Throughtout my time
              building websites I've used my fare share of tech; Laravel, React, Vue, Bootstrap, Foundation, RSpec,
              Solidus, Shopify, Postgres, Heroku, Netlify, Vercel, Salesforce, Webpack, Babel, jQuery, HAML, Slim, SCSS,
              Gridsome, Gatsby, Nuxt... and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About 👉',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Mark has been building websites for over 4 years, working in a number of different industries and a wide collection of libraries, tooling and framekworks.',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
.about-gradient {
  background-image: url('../assets/about.jpg');
}
</style>
