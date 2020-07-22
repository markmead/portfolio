<template>
  <g-link
    :to="path"
    :exact-active-class="activeClass"
    class="text-lg font-semibold leading-none text-black transition duration-150 ease-in-out hover:text-opacity-25"
    >{{ text }}</g-link
  >
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
      return this.showActive ? 'text-opacity-25' : null
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-link {
  @apply text-lg leading-none inline-block;

  &:hover {
    @apply underline;
  }
}
</style>
