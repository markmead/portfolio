<template>
  <span class="font-medium text-black text-opacity-50">{{ currentTime }}</span>
</template>

<script>
import DateFormat from 'kbdayz'

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
      const currentTime = `${new DateFormat(new Date(), {
        lang: 'en',
        country: 'UK',
        timeStyle: 'short',
      }).format()}`

      this.currentTime = currentTime
      localStorage.clear()
      localStorage.setItem('currentTime', currentTime)
    }, 1000)
  },
}
</script>

