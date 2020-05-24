<template>
  <Layout>
    <app-heading title="Here's a bit about me" />
    <app-sub-heading title="23 year old lead web developer from Essex" />
    <app-about-card :about="about" />
  </Layout>
</template>

<script>
import Heading from '~/components/Heading'
import SubHeading from '~/components/SubHeading'
import AboutCard from '~/components/AboutCard'

import about from '../data/about'

export default {
  metaInfo: {
    title: 'About Me',
    meta: [
      {
        name: 'description',
        content: '23 year old Ruby on Rails developer in Essex.'
      }
    ]
  },
  data() {
    return {
      about
    }
  },
  components: {
    'app-heading': Heading,
    'app-sub-heading': SubHeading,
    'app-about-card': AboutCard
  }
}
</script>
