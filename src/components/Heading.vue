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
  @apply text-title leading-tight font-extrabold;

  @screen sm {
    @apply text-title-sm;
  }

  @screen md {
    @apply text-title-md;
  }
}
</style>
