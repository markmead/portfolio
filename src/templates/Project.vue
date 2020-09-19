<template>
  <Layout>
    <Title :text="$page.project.title" />
    <Tech :tech="$page.project.tech" />
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
import Tech from '@/components/Tech'

export default {
  components: {
    Title,
    Content,
    Tech,
  },
}
</script>