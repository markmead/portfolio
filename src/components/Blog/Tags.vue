<template lang="pug">
  Spacer(classes="flex space-x-2")
    Tag(v-for="tag in tags" :key="tag" :text="tag")
</template>

<script>
import Tag from '@/components/Blog/Tag'
import Spacer from '@/components/Flow/Spacer'

export default {
  props: {
    tags: Array
  },
  components: {
    Tag,
    Spacer
  }
}
</script>