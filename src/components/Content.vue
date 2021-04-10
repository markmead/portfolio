<template>
  <div
    class="prose max-w-none dark:prose-dark"
    v-html="content"
  />
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>
