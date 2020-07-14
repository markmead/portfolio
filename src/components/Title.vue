<template lang="pug">
  h1.title {{ text }}
</template>

<script>
export default {
  props: { text: String }
}
</script>

<style lang="scss" scoped>
.title {
  @apply text-4xl leading-tight font-extrabold;

  @screen sm {
    @apply text-5xl;
  }

  @screen md {
    @apply text-6xl;
  }
}
</style>
