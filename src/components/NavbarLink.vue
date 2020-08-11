<template>
  <g-link
    :to="path"
    :exact-active-class="activeClass"
    :class="classes"
    class="text-lg font-semibold leading-none transition duration-150 ease-in-out hover:text-opacity-25"
    >{{ text }}</g-link
  >
</template>

<script>
export default {
  props: {
    path: String,
    text: String,
    classes: String,
  },
  computed: {
    activeClass() {
      return 'text-opacity-25'
    },
  },
}
</script>
