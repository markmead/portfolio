<template>
  <span class="inline-flex items-center px-3 py-2 m-1 text-xs text-green-300 bg-black">
    {{ currentTime }}
  </span>
</template>

<script>
import DateFormat from 'kbdays'

export default {
  data() {
    return {
      currentTime: '',
    }
  },
  beforeMount() {
    const localCurrentTime = localStorage.getItem('currentTime')

    if (localCurrentTime) this.currentTime = localCurrentTime
  },
  mounted() {
    setInterval(() => {
      let currentTime = new DateFormat(new Date(), {
        lang: 'en',
        country: 'UK',
        timeStyle: 'short',
      })

      if (window.innerWidth > 600) currentTime.dateStyle = 'short'

      currentTime = `${currentTime.format()}`

      this.currentTime = currentTime

      localStorage.clear()
      localStorage.setItem('currentTime', currentTime)
    }, 1000)
  },
}
</script>
