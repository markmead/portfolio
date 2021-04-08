<template>
  <div class="prose max-w-none" v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>
