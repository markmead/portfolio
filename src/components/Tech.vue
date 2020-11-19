<template>
  <div class="flex flex-wrap -m-1">
    <span
      class="inline-flex items-center px-3 py-2 m-1 font-mono text-xs text-green-300 bg-black"
      v-for="item in tech"
      :key="item"
      >{{ item }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    tech: Array,
  },
}
</script>
