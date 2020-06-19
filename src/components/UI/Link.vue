<template lang="pug">
  g-link(:to="path" class="link" :class="classes" :exact-active-class="activeClass") {{ text }}
</template>

<script>
export default {
  props: {
    path: String,
    text: String,
    classes: String,
    showActive: Boolean,
  },
  computed: {
    activeClass() {
      return this.showActive ? 'underline' : null
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  @apply text-lg leading-none inline-block;

  &:hover {
    @apply underline;
  }
}
</style>
