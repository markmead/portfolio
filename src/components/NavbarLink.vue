<template>
  <g-link :to="to" class="text-sm font-medium uppercase link">{{ text }}</g-link>
</template>

<script>
export default {
  props: {
    text: String,
    to: String,
  },
}
</script>
