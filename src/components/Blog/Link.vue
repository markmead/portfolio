<template lang="pug">
  a(:href="path" target="_blank" class="link") {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
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
