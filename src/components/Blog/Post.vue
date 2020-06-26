<template lang="pug">
  div
    Spacer(classes="space-y-2")
      Link(:path="path" :text="text")
      Paragraph(:text="description" classes="maw-w-lg")
      Tags(:tags="tags" classes="-mt-2")
</template>

<script>
import Tags from '@/components/UI/Tags'
import Link from '@/components/Blog/Link'
import Paragraph from '@/components/Text/Paragraph'
import Spacer from '@/components/Flow/Spacer'

export default {
  props: {
    text: String,
    path: String,
    description: String,
    tags: Array,
  },
  components: {
    Tags,
    Spacer,
    Paragraph,
    Link,
  },
}
</script>
