<template>
  <div class="flex flex-wrap -m-1">
    <span
      v-for="name in tech"
      v-text="name"
      :key="name"
      class="inline-block px-3 py-2 m-1 text-xs text-green-300 bg-black"
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
