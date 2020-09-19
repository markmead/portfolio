<template>
  <div class="flex flex-wrap -m-1">
    <span
      class="inline-flex items-center px-3 py-1 m-1 text-sm font-medium bg-gray-200 rounded"
      v-for="item in tech"
      :key="item"
    >{{ item }}</span>
  </div>
</template>

<script>
export default {
  props: {
    tech: Array,
  },
}
</script>