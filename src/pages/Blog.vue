<template>
  <Layout title="Blogs">
    <div class="space-y-16">
      <LinkGroup :edges="$page.blogs.edges" />
    </div>
  </Layout>
</template>

<page-query>
query {
  blogs: allBlog {
    edges {
      node {
        path
        title
        description
      }
    }
  }
}
</page-query>

<script>
import LinkGroup from '@/components/LinkGroup'

export default {
  components: {
    LinkGroup,
  },
  metaInfo: {
    title: 'Development Blogs',
    meta: [
      {
        name: 'description',
        content: 'Blogs that I have written about development, featuring; tips, tutorials and more',
      },
    ],
  },
}
</script>
