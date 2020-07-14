<template>
  <Layout>
    <h2 class="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
      Read the blog
    </h2>
    <div class="grid gap-12 pt-10 mt-6 border-t-2 border-gray-100 lg:grid-cols-2">
      <div v-for="blog in blogs" :key="blog.id">
        <time :datetime="blog.published_at" class="text-sm leading-none text-gray-500">
          {{ blog.readable_publish_date }}
        </time>
        <a :href="blog.url" target="blank" class="block mt-2">
          <h3 class="text-lg font-bold leading-tight">{{ blog.title }}</h3>
          <p class="mt-2 text-base leading-tight text-gray-500">{{ blog.description }}</p>
        </a>
        <a
          :href="blog.url"
          target="blank"
          class="inline-block mt-4 text-base font-semibold leading-none text-blue-600 transition duration-150 ease-in-out hover:text-blue-500"
        >
          Read full story
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  metaInfo: {
    title: 'Blog',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'As someone who has built himself up from Junior to Lead Web Developer, Mark has experience he wants to share with others making that transition.',
      },
    ],
  },
  data() {
    return {
      loading: true,
      error: false,
      blogs: null,
    }
  },
  async beforeMount() {
    await axios
      .get('https://dev.to/api/articles?username=markmead')
      .then((res) => {
        this.blogs = res.data
        this.loading = false
      })
      .catch((err) => {
        this.loading = false
        this.error = true
      })
  },
}
</script>
