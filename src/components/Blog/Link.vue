<template lang="pug">
  a(:href="path" target="_blank" class="link") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
    path: String
  }
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