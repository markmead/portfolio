<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-20 mx-auto sm:px-6">
      <h1 class="text-4xl leading-none text-center md:text-6xl font-display">Work</h1>
      <ul class="flex items-center justify-center max-w-4xl mx-auto mt-8 space-x-10">
        <app-filter-button v-for="i in 4" :key="i" />
      </ul>
      <div class="mt-8 text-xl font-bold text-center opacity-75">Projects coming soon</div>
      <!-- <div class="grid grid-cols-2 gap-8 mt-8">
        <app-work-link v-for="i in 10" :key="i" />
      </div>-->
    </div>
  </Layout>
</template>

<script>
import WorkLink from '~/components/WorkLink'
import FilterButton from '~/components/FilterButton'

export default {
  components: {
    'app-work-link': WorkLink,
    'app-filter-button': FilterButton
  }
}
</script>