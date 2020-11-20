<template>
  <div class="prose sm:prose-lg markdown" v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>
