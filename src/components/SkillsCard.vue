<template>
  <app-card classes="mt-5 sm:mt-8 p-5">
    <dl
      class="space-y-4 divide-y divide-gray-100 sm:space-y-0 sm:divide-y-0 sm:grid sm:row-gap-8 sm:col-gap-4 sm:grid-cols-2"
    >
      <div v-for="skill in skills" class="sm:col-span-1" :key="skill.title">
        <app-dl-dt :text="skill.title" />
        <app-dl-dd :text="skill.text" classes="mt-1" />
      </div>
    </dl>
  </app-card>
</template>

<script>
import Card from '~/components/Card'
import DescriptionListDD from '~/components/DescriptionListDD'
import DescriptionListDT from '~/components/DescriptionListDT'

export default {
  props: ['skills'],
  components: {
    'app-card': Card,
    'app-dl-dd': DescriptionListDD,
    'app-dl-dt': DescriptionListDT
  }
}
</script>