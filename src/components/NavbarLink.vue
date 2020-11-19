<template>
  <div class="prose">
    <g-link :to="to" class="font-mono text-sm font-medium underline uppercase">{{ text }}</g-link>
  </div>
</template>

<script>
export default {
  props: {
    to: String,
    text: String,
  },
}
</script>
