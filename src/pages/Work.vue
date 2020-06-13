<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-12 mx-auto sm:pt-16 md:pt-20 sm:px-6">
      <h1 class="text-6xl leading-none text-center font-display">Work</h1>
      <ul class="flex items-center justify-center max-w-4xl mx-auto mt-8 space-x-10">
        <app-work-filter-button v-for="i in 4" :key="i" />
      </ul>
      <div class="grid grid-cols-2 gap-8 mt-8">
        <app-work-link v-for="i in 10" :key="i" />
      </div>
    </div>
  </Layout>
</template>

<script>
import WorkLink from '~/components/WorkLink'
import WorkFilerButton from '~/components/WorkFilterButton'

export default {
  components: {
    'app-work-link': WorkLink,
    'app-work-filter-button': WorkFilerButton
  }
}
</script>