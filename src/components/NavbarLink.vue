<template>
  <g-link
    class="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-400"
    :to="to"
    v-text="text"
  />
</template>

<script>
export default {
  props: {
    text: String,
    to: String,
  },
}
</script>
