<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-20 mx-auto sm:px-6">
      <h1 class="text-4xl leading-none text-center md:text-6xl font-display">Blog</h1>
      <small
        class="block mt-4 text-sm italic font-bold text-center opacity-75"
      >I will add some toggles here so you can decide how the posts open/look</small>
    </div>
    <ul class="mt-8 -space-y-px">
      <app-blog-link
        v-for="blog in $page.blogs.edges"
        :key="blog.node.id"
        :id="blog.node.id"
        :url="blog.node.url"
        :title="blog.node.title"
        :description="blog.node.description"
        :tags="blog.node.tags.split(',')"
      />
    </ul>
    <app-dev-to-badge />
  </Layout>
</template>


<page-query>
  query {
    blogs: allBlogs(sortBy: "createdAt") {
      edges {
        node {
          id
          title
          description
          tags
          url
        }
      }
    }
  }
</page-query>

<script>
import BlogLink from '~/components/BlogLink'
import DevToBadge from '~/components/DevToBadge'

export default {
  components: {
    'app-blog-link': BlogLink,
    'app-dev-to-badge': DevToBadge
  }
}
</script>
