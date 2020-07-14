<template lang="pug">
  article.prose(v-html="content")
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>
