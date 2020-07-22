<template>
  <Layout>
    <div class="flex items-end min-h-screen py-12 bg-no-repeat bg-cover bg-image blog-gradient">
      <div class="max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">Blog</h1>
          <div class="mt-4 space-y-8">
            <div v-for="blog in blogs" :key="blog.id">
              <time
                :datetime="blog.published_at"
                class="text-sm font-medium leading-none text-black text-opacity-75"
              >{{ blog.readable_publish_date }}</time>
              <a :href="blog.url" target="blank" class="block mt-1 group">
                <h3
                  class="text-lg font-bold leading-tight text-black transition duration-150 ease-in-out sm:text-xl group-hover:text-opacity-50"
                >{{ blog.title }}</h3>
                <div
                  class="max-w-md mt-2 font-medium prose text-black text-opacity-75 transition duration-150 ease-in-out group-hover:text-opacity-25"
                >
                  <p>{{ blog.description }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
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

<style lang="scss" scoped>
.blog-gradient {
  background-image: url('../assets/blog.jpg');
}
</style>
