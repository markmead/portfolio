<template>
  <g-link class="block py-5 hover:opacity-75" :to="to">
    <h2 class="text-xl font-medium dark:text-gray-200">{{ title }}</h2>
    <p class="mt-2 text-gray-500 dark:text-gray-400">
      {{ text }}
    </p>
  </g-link>
</template>

<script>
export default {
  props: {
    text: String,
    title: String,
    to: String,
  },
}
</script>
