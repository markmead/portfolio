<template>
  <div class="relative group">
    <a :href="to" :target="external ? '_blank' : '_self'" class="relative z-10 block border-2 border-black">
      <div class="flex items-center justify-between p-6 bg-black">
        <p class="font-mono text-sm font-medium text-green-300 uppercase">{{ subtitle }}</p>
        <p class="font-mono text-xs font-medium bg-white px-2.5 py-1 uppercase" v-if="external">
          DEV.to
        </p>
      </div>
      <div class="p-6 transition-colors bg-white group-hover:bg-green-300">
        <h2 class="mt-2 font-mono text-xl font-semibold leading-tight">{{ title }}</h2>
        <p class="mt-2 font-mono text-base text-gray-800">{{ summary }}</p>
      </div>
    </a>
    <div class="absolute bg-green-300 w-full h-full top-0.5 left-0.5"></div>
  </div>
</template>

<script>
export default {
  props: {
    to: String,
    subtitle: String,
    title: String,
    summary: String,
    external: Boolean,
  },
}
</script>
