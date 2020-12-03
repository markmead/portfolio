<template>
  <g-link class="text-sm font-medium uppercase link" v-text="text" :to="to" />
</template>

<script>
export default {
  props: {
    text: String,
    to: String,
  },
}
</script>
