<template>
  <div class="flex flex-wrap -m-1">
    <span
      class="inline-flex items-center px-3 py-2 m-1 text-xs text-green-300 bg-black"
      v-for="tech in sortedTech"
      :key="tech"
    >
      {{ tech }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tech: Array,
  },
  computed: {
    sortedTech() {
      return this.tech.sort()
    },
  },
}
</script>
