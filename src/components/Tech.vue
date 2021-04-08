<template>
  <div class="flex flex-wrap -m-1 text-sm font-medium text-gray-500">
    <span v-for="name in tech" v-text="name" :key="name" class="inline-block px-3 py-2 m-1 bg-gray-100 rounded-lg" />
  </div>
</template>

<script>
export default {
  props: {
    tech: Array,
  },
}
</script>
