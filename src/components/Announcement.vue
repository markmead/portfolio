<template>
  <section class="flex items-center justify-center p-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
    <p class="text-sm font-medium text-center text-white">
      HyperUI: Components for Tailwind CSS!
      <a
        href="https://gum.co/uUMQe"
        class="underline"
        target="_blank"
        rel="noreferrer"
      >
        {{ count }} Components for {{ price }}
      </a>
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: '100+',
      price: '$10',
    }
  },
  mounted() {
    fetch('https://www.hyperui.dev/data.json', { method: 'get' })
      .then((response) => response.json())
      .then((data) => {
        this.count = data.count
        this.price = data.price
      })
  },
}
</script>
