<template>
  <Layout>
    <div class="text-center">
      <h2 class="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Some of my work</h2>
      <p
        class="max-w-2xl mx-auto mt-4 text-xl leading-tight text-gray-500"
      >Here's a collection of projects I've worked on/been working on</p>
    </div>
    <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
      <div
        class="flex flex-col overflow-hidden rounded-lg shadow-lg"
        v-for="project in $page.projects.edges"
        :key="project.node.id"
      >
        <div class="flex-shrink-0">
          <g-image :src="project.node.image" class="w-full h-56"></g-image>
        </div>
        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
          <div class="flex-1">
            <span class="text-sm font-medium leading-none text-blue-600">{{ project.node.brand }}</span>
            <a :href="project.node.path" class="block">
              <h3 class="mt-2 text-xl font-semibold leading-tight">{{ project.node.title }}</h3>
              <p class="mt-3 text-base leading-6 text-gray-500">{{ project.node.description }}</p>
            </a>
          </div>
        </div>
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
export default {
  metaInfo: {
    title: '💻 My Work',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Using a range of technologies, Mark has built a range of websites. These can be anything from lead generating, eCommerce, forums, landing pages, geolocation services and much more.'
      }
    ]
  }
}
</script>
