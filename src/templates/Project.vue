<template>
  <Layout>
    <div class="flex items-end min-h-screen py-12 bg-no-repeat bg-cover bg-image project-gradient">
      <div class="max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <a :href="$page.project.website" target="blank" class="flex flex-col group">
            <h1
              class="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl group-hover:text-opacity-50"
            >{{ $page.project.title }}</h1>
            <svg
              class="w-10 h-10 text-black group-hover:text-opacity-25"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <div
            class="max-w-md mt-4 font-medium prose text-black text-opacity-75 transition duration-150 ease-in-out group-hover:text-opacity-25"
            v-html="$page.project.content"
          ></div>
        </div>
      </div>
    </div>
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
.project-gradient {
  background-image: url('../assets/project.jpg');
}
</style>