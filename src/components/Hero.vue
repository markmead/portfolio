<template>
  <header role="banner">
    <div class="py-16">
      <Title :text="title" />
      <Subtitle
        v-if="text"
        :text="text"
      />
    </div>
  </header>
</template>

<script>
export default {
  components: {
    Title: () => import('@/components/Title'),
    Subtitle: () => import('@/components/Subtitle'),
  },
  props: {
    title: String,
    text: String,
  },
}
</script>
