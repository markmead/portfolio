<template lang="pug">
  g-link(:to="path" class="link" :class="classes") {{ text }}
</template>

<script>
export default {
  props: {
    path: String,
    text: String,
    classes: String,
  },
}
</script>

<style lang="scss" scoped>
.link {
  @apply text-lg leading-none inline-block underline;

  &:hover {
    @apply no-underline opacity-75;
  }
}
</style>
