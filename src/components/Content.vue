<template>
  <div class="font-mono prose sm:prose-lg" v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>
