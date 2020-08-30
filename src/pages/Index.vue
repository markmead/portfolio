<template>
  <Layout>
    <div class="max-w-xl px-4 pt-24 pb-32 mx-auto">
      <g-image src="../assets/badge-icon.svg" class="w-20 mx-auto badge-icon" />
      <h1 class="mt-6 text-5xl font-medium leading-none text-center text-gray-900">Mark Mead</h1>
      <div class="mx-auto mt-4 font-light prose prose-xl text-center">
        <p>
          Hi! I'm a web developer creating websites with Ruby on Rails, Vue, Solidus, Shopify and a lot more.
        </p>
      </div>

      <div class="flex justify-center mt-8">
        <g-link
          to="/about"
          class="inline-flex items-center px-8 py-2 font-medium leading-none border rounded-full shadow-lg border-cool-gray text-cool-gray-text bg-gradient-to-t from-cool-gray-dark to-cool-gray"
        >
          Find out more
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 ml-2 opacity-75">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </g-link>
      </div>
    </div>

    <div class="px-4">
      <div class="flex flex-col items-center justify-center bg-white py-36">
        <div class="w-full max-w-screen-lg mx-auto">
          <p class="text-lg font-medium leading-none text-center text-subtitle-gray">
            I write code with
          </p>

          <div class="grid grid-cols-2 gap-8 mt-16 sm:grid-cols-3 lg:grid-cols-6">
            <div v-for="tech of techStack" :key="tech" class="inline-flex items-center justify-center">
              <h2 class="text-xl font-medium leading-none text-center text-gray-700">
                {{ tech }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="max-w-3xl px-4 py-40 mx-auto space-y-24">
        <div
          v-for="project in $page.projects.edges"
          :key="project.node.id"
          class="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
        >
          <g-image :src="project.node.image" class="w-auto mx-auto drop-shadow lg:order-last" />
          <div>
            <h2 class="text-4xl font-medium leading-none text-gray-900">{{ project.node.brand }}</h2>
            <div class="mx-auto mt-4 font-light prose prose-xl">
              <p>
                {{ project.node.title }}
              </p>
            </div>

            <g-link
              :to="project.node.path"
              class="inline-flex items-center px-8 py-2 mt-8 font-medium leading-none text-white border rounded-full shadow-lg border-cool-blue bg-gradient-to-t from-cool-blue-dark to-cool-blue"
            >
              Find out more
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 ml-2 opacity-75">
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </g-link>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4">
      <div class="grid grid-cols-1 gap-4 pb-16 lg:grid-cols-3">
        <article v-for="blog in blogs" :key="blog.id" class="flex flex-col justify-between px-8 py-16 bg-white">
          <div>
            <a :href="blog.url" class="text-3xl font-medium leading-tight text-gray-900">
              {{ blog.title }}
            </a>
            <div class="mx-auto mt-4 font-light prose prose-xl">
              <p>
                {{ blog.description }}
              </p>
            </div>
          </div>

          <span>
            <a
              :href="blog.url"
              class="inline-flex items-center px-8 py-2 mt-8 font-medium leading-none text-white border rounded-full shadow-lg border-cool-blue bg-gradient-to-t from-cool-blue-dark to-cool-blue"
            >
              Find out more
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 ml-2 opacity-75">
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </span>
        </article>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query { 
  projects: allProject { 
    edges {
      node { 
        title 
        brand
        description
        image
        path
      } 
    } 
  } 
}
</page-query>

<script>
const techStack = [
  'Ruby on Rails',
  'JavaScript',
  'Tailwind',
  'Solidus',
  'Vue',
  'Shopify',
  'RSpec',
  'Webpack',
  'Heroku',
  'Stimulus',
  'Foundation',
  'Alpine',
  'Bootstrap',
  'jQuery',
]

import axios from 'axios'

export default {
  metaInfo: {
    title: 'Hello there. General Kenobi.',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Building websites',
      },
    ],
  },
  data() {
    return {
      techStack,
      loading: true,
      error: false,
      blogs: null,
    }
  },
  async beforeMount() {
    await axios
      .get('https://dev.to/api/articles?username=markmead')
      .then((res) => {
        this.blogs = res.data.slice(0, 3)
        this.loading = false
      })
      .catch((err) => {
        this.loading = false
        this.error = true
      })
  },
}
</script>
