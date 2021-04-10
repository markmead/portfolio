<template>
  <Layout title="Uses">
    <Tech :tech="tech" />
  </Layout>
</template>

<script>
import Tech from '@/components/Tech'

export default {
  data() {
    return {
      tech: [
        'Ruby on Rails',
        'RSpec',
        'Heroku',
        'Tailwind',
        'Vue',
        'Shopify',
        'Angular',
        'Typescript',
        'Webpack',
        'SCSS',
        'HTML5',
        'Liquid',
        'Bootstrap',
      ],
    }
  },
  components: {
    Tech,
  },
  metaInfo: {
    title: 'Uses',
    meta: [
      {
        name: 'description',
        content: 'View a list of the common technolgies that I use when building websites.',
      },
    ],
  },
}
</script>
