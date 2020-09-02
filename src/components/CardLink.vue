<template>
  <a
    :href="to"
    :target="external ? '_blank' : '_self'"
    class="block px-6 py-3 border-l-4 border-black border-opacity-25 hover:border-opacity-75"
  >
    <p class="font-medium text-black text-opacity-50">{{ subtitle }}</p>
    <h2 class="text-2xl font-semibold">{{ title }}</h2>
    <div class="mt-2 prose">
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