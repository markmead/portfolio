<template>
  <Layout>
    <Title :text="$page.project.title" />
    <Tech :tech="$page.project.tech" />
    <div class="relative inline-flex group">
      <a
        :href="$page.project.website"
        target="_blank"
        rel="nofollow"
        class="inline-flex bg-white font-mono relative z-10 px-5 py-2.5 border-2 border-black group-hover:bg-black group-hover:text-green-300 transition-colors"
        >View Website</a
      >
      <div class="absolute bg-green-300 w-full h-full top-0.5 left-0.5"></div>
    </div>
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
