<template>
  <h1 class="text-4xl font-bold dark:text-white">
    {{ text }}
  </h1>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>
