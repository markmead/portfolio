<template>
  <Layout>
    <app-heading title="👋 Hi I'm Mark" />
    <app-sub-heading title="A web developer that builds mobile first, performance driven websites" />
    <div class="flex justify-center">
      <app-social />
    </div>
  </Layout>
</template>

<script>
import Heading from '~/components/Heading'
import SubHeading from '~/components/SubHeading'
import Social from '~/components/Social'

export default {
  metaInfo: {
    title: 'Hello',
    meta: [
      {
        name: 'description',
        content: '23 year old Ruby on Rails developer in Essex.'
      }
    ]
  },
  components: {
    'app-heading': Heading,
    'app-sub-heading': SubHeading,
    'app-social': Social
  }
}
</script>
