<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-20 mx-auto sm:px-6">
      <h1 class="text-4xl leading-none text-center md:text-6xl font-display">Site Info</h1>
      <dl class="max-w-xl mx-auto mt-8 space-y-6">
        <div v-for="data of siteInfoData" :key="data.title" class="grid grid-cols-2 gap-8">
          <dt class="text-4xl font-bold leading-none font-display">{{ data.title }}</dt>
          <dd class="text-right">
            <template v-if="data.text">
              <p class="text-2xl font-bold leading-none opacity-75 font-display">{{ data.text }}</p>
            </template>
            <template v-if="data.list">
              <ul class="mt-2 space-y-2">
                <li
                  class="text-lg font-bold leading-tight opacity-75"
                  v-for="item in data.list"
                  :key="item"
                >{{ item }}</li>
              </ul>
            </template>
          </dd>
        </div>
      </dl>
    </div>
  </Layout>
</template>

<script>
import siteInfoData from '~/data/site-info.js'

export default {
  data() {
    return {
      siteInfoData
    }
  }
}
</script>