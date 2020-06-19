<template lang="pug">
  .space-y-2
    a(:href="path" class="link" target="_blank") {{ text }}
    .text-sm.opacity-75.max-w-sm {{ description }}
    .flex.space-x-2
      Tag(v-for="tag in tags" :key="tag" :text="tag")
</template>

<script>
import Tag from '@/components/Tag'

export default {
  props: {
    text: String,
    path: String,
    description: String,
    tags: Array,
  },
  components: {
    Tag,
  },
}
</script>

<style lang="scss" scoped>
.link {
  @apply text-2xl font-serif leading-tight underline;

  &:hover {
    @apply no-underline;
  }
}
</style>
