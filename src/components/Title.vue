<template>
  <h1 class="text-4xl font-medium md:text-5xl" v-text="text" />
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>
