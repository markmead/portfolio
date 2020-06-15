<template>
  <li class="border-t border-b border-white">
    <g-link :to="url" target="_blank" class="block py-12 hover:bg-white hover:text-black">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6">
        <div class="max-w-5xl">
          <h2 class="text-3xl leading-tight md:text-5xl font-display">{{ title }}</h2>
          <p class="mt-2 text-lg font-bold opacity-75 sm:text-xl">{{ description }}</p>
        </div>
      </div>
    </g-link>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    description: String,
    url: String
  }
}
</script>
