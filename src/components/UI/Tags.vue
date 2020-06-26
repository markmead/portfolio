<template lang="pug">
  div
    Spacer(classes="flex flex-wrap -mr-2" :class="classes")
      Tag(v-for="tag in tags" :key="tag" :text="tag")
</template>

<script>
import Tag from '@/components/UI/Tag'
import Spacer from '@/components/Flow/Spacer'

export default {
  props: {
    tags: Array,
    classes: String,
  },
  components: {
    Tag,
    Spacer,
  },
}
</script>
