<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-12 mx-auto sm:pt-16 md:pt-20 sm:px-6">
      <h1 class="text-6xl leading-none text-center font-display">Blog</h1>
    </div>
    <ul class="mt-8 -space-y-px">
      <app-blog-index-link v-for="i in 10" :key="i" />
    </ul>
  </Layout>
</template>

<script>
import BlogIndexLink from '~/components/BlogIndexLink'

export default {
  components: {
    'app-blog-index-link': BlogIndexLink
  }
}
</script>