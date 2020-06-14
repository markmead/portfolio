<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-20 mx-auto sm:px-6">
      <h1 class="text-4xl leading-none text-center md:text-6xl font-display">Resources</h1>
      <div class="max-w-2xl mx-auto mt-8">
        <input
          type="text"
          class="w-full p-4 text-xl leading-none bg-transparent border-white rounded-none placeholder-gray form-input"
          placeholder="Search resources"
        />
      </div>
      <ul class="flex items-center justify-center max-w-4xl mx-auto mt-8 space-x-10">
        <app-filter-button v-for="i in 4" :key="i" />
      </ul>
      <ul class="max-w-4xl mx-auto mt-8">
        <app-resource-link v-for="i in 10" :key="i" />
      </ul>
    </div>
  </Layout>
</template>

<script>
import ResourceLink from '~/components/ResourceLink'
import FilerButton from '~/components/FilterButton'

export default {
  components: {
    'app-resource-link': ResourceLink,
    'app-filter-button': FilerButton
  }
}
</script>

