<template>
  <div class="flex flex-wrap -m-1">
    <span
      v-for="tech in sortedTech"
      v-text="tech"
      :key="tech"
      class="inline-flex items-center px-3 py-2 m-1 text-xs text-green-300 bg-black"
    />
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
