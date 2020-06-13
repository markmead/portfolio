<template>
  <div>
    <g-link
      :to="path"
      class="inline-block text-5xl leading-none lowercase hover:opacity-50 font-display focus:outline-none focus:shadow-outline"
      >{{ text }}</g-link
    >
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    text: String,
  },
}
</script>
