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
  @apply text-lg leading-none underline font-bold;

  &:hover {
    @apply no-underline;
  }
}
</style>
