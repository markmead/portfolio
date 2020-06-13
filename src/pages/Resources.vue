<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-12 mx-auto sm:pt-16 md:pt-20 sm:px-6">
      <h1 class="text-6xl leading-none text-center font-display">Resources</h1>
      <div class="max-w-2xl mx-auto mt-8">
        <input
          type="text"
          class="w-full p-4 text-xl leading-none text-white bg-transparent border-t-0 border-b border-l-0 border-r-0 border-white rounded-none font-display form-input"
          placeholder="Search resources"
        />
      </div>
      <div class="grid grid-cols-12 gap-8 mt-8">
        <div class="col-span-2">
          <button class="hover:opacity-50 text-pink">
            <span class="text-2xl font-bold leading-none font-display">Ruby</span>
            <sup class="ml-1 text-sm font-bold leading-none font-display">(3)</sup>
          </button>
        </div>
        <div class="col-span-10">
          <ul>
            <app-resource-link v-for="i in 10" :key="i" />
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ResourceLink from '~/components/ResourceLink'

export default {
  components: {
    'app-resource-link': ResourceLink
  }
}
</script>
