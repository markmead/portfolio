<template>
  <section class="text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
    <div class="container py-3">
      <p class="text-sm font-medium text-white">
        HyperUI: Components for Tailwind CSS!
        <a
          href="https://www.hyperui.dev/"
          class="underline"
          rel="noreferrer"
          target="_blank"
        >
          {{ count }} Components for {{ price }}
        </a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: '',
      price: '',
    }
  },
  mounted() {
    fetch('https://www.hyperui.dev/data.json', { method: 'get' })
      .then((response) => response.json())
      .then((data) => {
        const price = data.price.substring(1)

        this.count = data.count
        this.price = `$${price}`
      })
  },
}
</script>
