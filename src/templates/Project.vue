<template>
  <Layout :title="$page.project.title">
    <div class="max-w-3xl px-4 mx-auto space-y-16">
      <Tech :tech="$page.project.tech" />
      <Content :content="$page.project.content" />
    </div>
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
    Content,
    Tech,
  },
}
</script>
