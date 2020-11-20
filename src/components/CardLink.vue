<template>
  <div class="relative group">
    <a :href="to" :target="external ? '_blank' : '_self'" class="relative z-10 block font-medium border-2 border-black">
      <div class="flex items-center justify-between p-6 uppercase bg-black">
        <p class="text-sm text-green-300">{{ subtitle }}</p>
        <p class="text-xs bg-white px-2.5 py-1" v-if="external">
          DEV.to
        </p>
      </div>
      <div class="p-6 transition-colors bg-white group-hover:bg-green-300">
        <h2 class="text-xl">{{ title }}</h2>
        <p class="mt-2 text-base text-gray-800">{{ summary }}</p>
      </div>
    </a>
    <div class="absolute bg-green-300 w-full h-full top-0.5 left-0.5"></div>
  </div>
</template>

<script>
export default {
  props: {
    external: Boolean,
    subtitle: String,
    summary: String,
    title: String,
    to: String,
  },
}
</script>
