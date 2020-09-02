<template>
  <div class="prose sm:prose-lg" :class="classes" v-html="content"></div>
</template>

<script>
export default {
  props: {
    classes: String,
    content: String,
  },
}
</script>