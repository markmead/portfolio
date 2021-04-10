<template>
  <div class="flex flex-wrap -m-1 text-sm font-medium text-gray-500 dark:text-gray-300">
    <span
      v-for="name in tech"
      :key="name"
      class="inline-block px-3 py-2 m-1 bg-gray-100 rounded-lg dark:bg-gray-800"
      v-text="name"
    />
  </div>
</template>

<script>
export default {
  props: {
    tech: Array,
  },
}
</script>
