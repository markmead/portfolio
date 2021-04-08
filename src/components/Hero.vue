<template>
  <header role="banner">
    <div class="max-w-3xl px-4 py-16 mx-auto">
      <Title :text="title" />
      <Subtitle :text="text" v-if="text" />
    </div>
  </header>
</template>

<script>
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'

export default {
  components: { Title, Subtitle },
  props: {
    title: String,
    text: String,
  },
}
</script>
