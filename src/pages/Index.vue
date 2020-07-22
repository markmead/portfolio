<template>
  <Layout>
    <div class="flex items-end min-h-screen py-12 bg-no-repeat bg-cover bg-image home-gradient">
      <div class="max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">Hey, I'm Mark</h1>
          <div class="mt-4 font-medium prose prose-lg text-black text-opacity-75 sm:prose-xl">
            <p>
              A Ruby on Rails developer building websites that are worth looking at.
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

<style lang="scss" scoped>
.home-gradient {
  background-image: url('../assets/home.jpg');
}
</style>
