<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-20 mx-auto sm:px-6">
      <article>
        <h1 class="text-4xl leading-none md:text-6xl font-display">{{ blog.title }}</h1>
        <time
          datetime
          class="text-xl leading-tight opacity-75 md:text-2xl font-display"
        >{{ blog.friendly_created_at }}</time>
        <div class="max-w-3xl mx-auto mt-8 markdown-content">
          <vue-simple-markdown :source="blog.body" />
        </div>
      </article>
      <div class="flex items-center justify-center py-8">
        <g-link to="/blog" class="block text-center group">
          <g-image src="~/assets/images/arrow.svg" class="ml-auto" />
          <p
            class="text-xl font-bold leading-none lowercase opacity-75 font-display group-hover:opacity-100"
          >Back to blogs</p>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
// import axios from 'axios'
// const blog = 'http://localhost:3000/blogs'

export default {
  data() {
    return {
      blog: null
    }
  }
  // async mounted() {
  //   await axios
  //     .get(`${blog}/${this.$context.id}`)
  //     .then((res) => {
  //       this.blog = res.data
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },
}
</script>
