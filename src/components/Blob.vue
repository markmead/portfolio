<template lang="pug">
  .blob(:class="classes")
</template>

<script>
export default {
  props: { classes: String }
}
</script>

<style lang="scss" scoped>
.blob {
  @apply pointer-events-none absolute -z-1;
  animation: radius 12s ease-in-out reverse infinite;
}

@keyframes radius {
  0%,
  100% {
    border-radius: 43% 77% 80% 40% / 40% 40% 80% 80%;
  }
  20% {
    border-radius: 47% 73% 61% 59% / 47% 75% 45% 73%;
  }
  40% {
    border-radius: 46% 74% 74% 46% / 74% 58% 62% 46%;
  }
  60% {
    border-radius: 47% 73% 61% 59% / 40% 40% 80% 80%;
  }
  80% {
    border-radius: 50% 70% 52% 68% / 51% 61% 59% 69%;
  }
}
</style>