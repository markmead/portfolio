<template>
  <p class="mt-4 text-xl text-gray-500 dark:text-gray-400">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>
