<template>
  <Layout :title="$page.blog.title">
    <div class="space-y-16">
      <Content :content="$page.blog.content" />
    </div>
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
import Content from '@/components/Content'

export default {
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
  components: {
    Content,
  },
}
</script>
