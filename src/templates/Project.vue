<template>
  <Layout :title="$page.project.title">
    <Tech :tech="$page.project.tech" />
    <Button text="View Website" :to="$page.project.website" />
    <Break />
    <Content :content="$page.project.content" />
  </Layout>
</template>

<page-query>
query Project($path: String!) {
  project (path: $path) {
    brand
    content
    tech
    title
    website
  }
}
</page-query>

<script>
import Button from '@/components/Button'
import Break from '@/components/Break'
import Content from '@/components/Content'
import Tech from '@/components/Tech'

export default {
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          content: this.$page.project.description,
        },
      ],
    }
  },
  components: {
    Button,
    Break,
    Content,
    Tech,
  },
}
</script>
