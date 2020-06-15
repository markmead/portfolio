<template>
  <Layout>
    <div
      class="fixed bottom-0 right-0 flex items-center p-4 text-black transform -translate-x-8 -translate-y-8 bg-white"
    >
      <span class="text-sm font-bold">Blog proudly powered by &nbsp;</span>
      <a href="https://dev.to/markmead">
        <img
          src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
          alt="Mark's DEV Profile"
          height="30"
          width="30"
        />
      </a>
    </div>
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

export default {
  components: {
    'app-blog-link': BlogLink
  }
}
</script>
