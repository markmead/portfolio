<template>
  <h1 class="text-4xl font-bold dark:text-white" v-text="text" />
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>
