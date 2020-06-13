<template>
  <button
    v-on:click="$emit('toggleMenu')"
    class="inline-flex items-center justify-center px-5 pt-3 pb-2 text-xl font-bold leading-none text-black lowercase bg-white font-display focus:outline-none focus:shadow-outline"
  >
    Menu
  </button>
</template>
