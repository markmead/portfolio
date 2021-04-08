<template>
  <Layout title="Blogs"> </Layout>
</template>

<script>
import CardLink from '@/components/CardLink'

export default {
  components: {
    CardLink,
  },
  metaInfo: {
    title: 'Development Blogs',
    meta: [
      {
        name: 'description',
        content: 'Blogs that I have written about development, featuring; tips, tutorials and more',
      },
    ],
  },
}
</script>
