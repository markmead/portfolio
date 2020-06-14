<template>
  <li class="border-t border-b border-white">
    <g-link :to="this.blogPath" class="block py-12 hover:bg-white hover:text-black">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6">
        <div class="max-w-5xl">
          <h2 class="text-3xl leading-tight md:text-5xl font-display">{{ title }}</h2>
          <p class="mt-2 text-lg font-bold opacity-75 sm:text-xl">{{ teaser }}</p>
        </div>
      </div>
    </g-link>
  </li>
</template>

<script>
export default {
  data() {
    return {
      blogPath: null
    }
  },
  props: {
    id: String,
    title: String,
    teaser: String,
    path: String
  },
  mounted() {
    this.blogPath = `/blog/${this.path}`
  }
}
</script>
