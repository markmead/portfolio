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
      tech: ['Ruby on Rails', 'RSpec', 'Heroku', 'Tailwind'],
    }
  },
  components: {
    Tech,
  },
}
</script>
