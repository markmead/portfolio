<template lang="pug">
  .space-y-4.content-wrapper(v-html="content")
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>

<style lang="scss">
.content-wrapper {
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply leading-tight font-serif;
  }

  h2 {
    @apply text-4xl;
  }

  h3 {
    @apply text-3xl;
  }

  h4 {
    @apply text-2xl;
  }

  h5 {
    @apply text-xl;
  }

  h6 {
    @apply text-lg;
  }

  ol,
  ul {
    @apply list-inside pl-4;
  }

  ul {
    @apply list-disc;
  }

  ol {
    @apply list-decimal;
  }

  a {
    @apply underline;

    &:hover {
      @apply no-underline opacity-75;
    }
  }
}
</style>
