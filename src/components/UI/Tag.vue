<template lang="pug">
  span.tag {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>

<style lang="scss">
.tag {
  @apply px-3 py-1.5 leading-none text-xs border border-black rounded opacity-50 mr-2 mt-2;
}
</style>
