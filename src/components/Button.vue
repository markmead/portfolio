<template>
  <div class="relative inline-flex group">
    <a
      class="inline-flex bg-white relative z-10 px-5 py-2.5 border-2 border-black group-hover:bg-black group-hover:text-green-300 transition-colors"
      v-text="text"
      :href="to"
    />
    <div class="absolute bg-green-300 w-full h-full top-0.5 left-0.5"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    to: String,
  },
}
</script>
