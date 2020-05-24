<template>
  <app-card classes="mt-5 sm:mt-8 p-5">
    <dl
      class="space-y-4 divide-y divide-gray-100 sm:space-y-0 sm:divide-y-0 sm:grid sm:row-gap-8 sm:col-gap-4 sm:grid-cols-3"
    >
      <div v-for="info in about" class="sm:col-span-1" :key="info.title">
        <app-dl-dt :text="info.title" />
        <app-dl-dd :text="info.text" classes="mt-1" />
      </div>
      <div class="sm:col-span-2">
        <app-dl-dt :text="bio.title" />
        <app-dl-dd :text="bio.text" classes="mt-1" />
      </div>
    </dl>
  </app-card>
</template>

<script>
import Card from '~/components/Card'
import DescriptionListDD from '~/components/DescriptionListDD'
import DescriptionListDT from '~/components/DescriptionListDT'

const bio = {
  title: 'Bio',
  text:
    'Experienced Lead Web Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Vue.js, Shopify, Ruby on Rails, Content Management Systems (CMS), and a range of front-end technologies.'
}

export default {
  data() {
    return { bio }
  },
  props: ['about'],
  components: {
    'app-card': Card,
    'app-dl-dd': DescriptionListDD,
    'app-dl-dt': DescriptionListDT
  }
}
</script>