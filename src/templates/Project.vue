<template>
  <Layout :title="$page.project.title">
    <Content :content="$page.project.content" />
  </Layout>
</template>

<page-query>
query Project($path: String!) {
  project (path: $path) {
    content
    title
    website
    description
  }
}
</page-query>

<script>
export default {
  components: {
    Content: () => import('@/components/Content'),
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
