<template>
  <div>
    <g-link
      :to="path"
      class="inline-block text-2xl leading-none lowercase md:text-4xl hover:opacity-50 font-display focus:outline-none focus:shadow-outline"
    >{{ text }}</g-link>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    text: String
  }
}
</script>
