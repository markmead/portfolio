<template>
  <g-link
    :to="url"
    class="font-serif text-xl leading-none hover:underline"
    exact-active-class="underline"
  >{{ text }}</g-link>
</template>

<script>
export default {
  props: ['url', 'text']
}
</script>
