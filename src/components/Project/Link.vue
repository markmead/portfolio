<template lang="pug">
  a(:href="path" class="link") {{ text }} - {{ brand }}
</template>

<script>
export default {
  props: {
    text: String,
    brand: String,
    path: String,
  },
}
</script>

<style lang="scss" scoped>
.link {
  @apply text-2xl font-serif leading-tight underline;

  &:hover {
    @apply no-underline;
  }
}
</style>
