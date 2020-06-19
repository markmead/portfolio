<template lang="pug">
  g-link(:to="path" class="button") {{ text }}
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
.button {
  @apply px-8 py-4 text-base leading-none inline-block border border-black transition duration-150 ease-in-out;

  &:hover {
    @apply shadow-2xl bg-black text-white;
  }
}
</style>
