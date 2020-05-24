<template>
  <Layout>
    <app-heading title="🚧 Under construction 🚧" />
    <app-sub-heading title="Will get this live by the end of May 😅" />
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
    title: 'Blog',
    meta: [
      {
        name: 'description',
        content: 'Read stuff that I have written'
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
