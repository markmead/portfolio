<template>
  <g-link :to="to" class="font-medium underline hover:no-underline">{{ text }}</g-link>
</template>

<script>
export default {
  props: {
    to: String,
    text: String,
  },
}
</script>