<template>
  <Layout :title="$page.blog.title">
    <Content :content="$page.blog.content" />
  </Layout>
</template>

<page-query>
query Blog($path: String!) {
  blog (path: $path) {
    content
    title
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
      title: this.$page.blog.title,
      meta: [
        {
          name: 'description',
          content: this.$page.blog.description,
        },
      ],
    }
  },
}
</script>
