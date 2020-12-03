<template>
  <div class="relative group">
    <a :href="to" class="relative z-10 block border-2 border-black">
      <div class="flex items-center justify-between p-6 font-medium uppercase bg-black">
        <p class="text-sm text-green-300">{{ subtitle }}</p>
        <span class="text-xs bg-white px-2.5 py-1" v-if="blog">
          DEV.to
        </span>
      </div>
      <div class="p-6 transition-colors bg-white group-hover:bg-green-300">
        <h2 class="text-xl font-medium">{{ title }}</h2>
        <div class="mt-2 prose">
          <p>{{ summary }}</p>
        </div>
      </div>
    </a>
    <div class="absolute bg-green-300 w-full h-full top-0.5 left-0.5"></div>
  </div>
</template>

<script>
export default {
  props: {
    blog: Boolean,
    subtitle: String,
    summary: String,
    title: String,
    to: String,
  },
  mounted() {
    this.$externalLinks()
  },
}
</script>
