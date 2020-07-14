<template>
  <Layout>
    <div class="text-center">
      <h1 class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
        Hello, I'm
        <br />
        <span class="text-blue-600">Mark Mead</span>
      </h1>
      <div class="mt-4 text-6xl leading-none">👋</div>
      <p class="max-w-md mx-auto mt-4 text-base text-gray-500 sm:text-lg md:text-xl md:max-w-xl">
        A 23 year old web developer from Essex, creating user focused websites with Ruby on Rails, JavaScript and
        Shopify.
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Welcome',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Mark Mead is a 23 year old web developer in Essex, United Kingdom. Building websites in Ruby on Rails and JavaScript.',
      },
    ],
  },
}
</script>
