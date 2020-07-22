<template>
  <Layout>
    <div class="flex items-end min-h-screen py-12 bg-no-repeat bg-cover bg-image work-gradient">
      <div class="max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">Work</h1>
          <div class="mt-4 space-y-8">
            <div v-for="project in $page.projects.edges" :key="project.node.id">
              <div class="flex flex-col">
                <span class="text-sm font-medium leading-none text-black text-opacity-75">
                  {{ project.node.brand }}
                </span>
                <a :href="project.node.path" class="block group">
                  <h3
                    class="mt-1 text-lg font-bold leading-tight text-black transition duration-150 ease-in-out sm:text-xl group-hover:text-opacity-50"
                  >
                    {{ project.node.title }}
                  </h3>
                  <div
                    class="max-w-md mt-2 font-medium prose text-black text-opacity-75 transition duration-150 ease-in-out group-hover:text-opacity-25"
                  >
                    <p>{{ project.node.description }}</p>
                  </div>
                </a>
              </div>
            </div>
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
        path 
      } 
    } 
  } 
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'My Work',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Using a range of technologies, Mark has built a range of websites. These can be anything from lead generating, eCommerce, forums, landing pages, geolocation services and much more.',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
.work-gradient {
  background-image: url('../assets/work.jpg');
}
</style>
