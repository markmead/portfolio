<template>
  <Layout>
    <Title :text="$page.project.title" />
    <Content classes="mt-8" :content="$page.project.content" />
  </Layout>
</template>

<page-query>
query Project($path: String!) {
  project (path: $path) {
    title
    brand
    website
    description
    content
    tech
  }
}
</page-query>

<script>
import Title from '@/components/Title'
import Content from '@/components/Content'

export default {
  components: {
    Title,
    Content,
  },
}
</script>