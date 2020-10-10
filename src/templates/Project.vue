<template>
  <Layout>
    <Title :text="$page.project.title" />
    <Tech :tech="$page.project.tech" />
    <a
      :href="$page.project.website"
      target="_blank"
      rel="nofollow"
      class="inline-block text-xl underline hover:no-underline"
      >View Website</a
    >
    <Break />
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
import Break from '@/components/Break'

export default {
  components: {
    Title,
    Content,
    Tech,
    Break,
  },
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
}
</script>
