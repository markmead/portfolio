<template>
  <div class="prose">
    <g-link :to="to" class="text-sm font-medium uppercase">{{ text }}</g-link>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    to: String,
  },
}
</script>
