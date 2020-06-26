<template lang="pug">
  Spacer(classes="space-y-2")
    Link(:path="path" :text="text" :brand="brand")
    Paragraph(:text="description" classes="maw-w-lg")
</template>

<script>
import Spacer from '@/components/Flow/Spacer'
import Link from '@/components/Project/Link'
import Paragraph from '@/components/Text/Paragraph'

export default {
  props: {
    path: String,
    brand: String,
    text: String,
    description: String,
  },
  components: {
    Spacer,
    Link,
    Paragraph,
  },
}
</script>
