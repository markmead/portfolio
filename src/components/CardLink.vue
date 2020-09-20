<template>
  <a
    :href="to"
    :target="external ? '_blank' : '_self'"
    class="block px-6 py-3 border-l-4 border-black border-opacity-25 hover:border-opacity-75"
  >
    <p class="text-sm font-medium leading-none tracking-wide text-black text-opacity-50 uppercase">{{ subtitle }}</p>
    <h2 class="mt-2 text-xl font-semibold leading-tight tracking-tighter">{{ title }}</h2>
    <div class="mt-2 text-black text-opacity-50">
      <p>{{ summary }}</p>
    </div>
  </a>
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
