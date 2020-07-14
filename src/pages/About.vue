<template>
  <Layout>
    <div class="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
      <div class="lg:col-span-1">
        <h3 class="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Some information you might read
        </h3>
      </div>
      <div class="mt-8 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
        <div>
          <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-md">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="mt-4">
            <h4 class="text-lg font-medium leading-none">Development</h4>
            <p class="mt-2 text-base leading-tight text-gray-500">
              As a developer I've built my fair share of websites, most recently using Ruby on Rails, Stimulus, Vue,
              Tailwind, Alpine and Shopify.
            </p>
          </div>
        </div>
        <div class="mt-8 sm:mt-0">
          <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-md">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="mt-4">
            <h4 class="text-lg font-medium leading-none">Website</h4>
            <p class="mt-2 text-base leading-tight text-gray-500">
              This website is built with the Vue framework, Gridsome. It's deployed on Vercel and the blog is powered by
              the DEV.to API.
            </p>
          </div>
        </div>
        <div class="mt-8 sm:mt-0">
          <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-md">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
              ></path>
            </svg>
          </div>
          <div class="mt-4">
            <h4 class="text-lg font-medium leading-none">Hobbies</h4>
            <p class="mt-2 text-base leading-tight text-gray-500">
              Development is something I happily do as a hobby and for work, but when I'm not writting code I'll
              typically be found watching Netlfix, playing Warframe or out with my partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About 👉',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Mark has been building websites for over 4 years, working in a number of different industries and a wide collection of libraries, tooling and framekworks.',
      },
    ],
  },
}
</script>
