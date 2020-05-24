<template>
  <div class="flex flex-col justify-between p-6 bg-gray-50">
    <div class="flex-1">
      <h3 class="text-xl font-semibold leading-7 text-gray-900">{{ project.brand }}</h3>
      <p class="mt-3 text-base leading-6 text-gray-500">{{ project.description }}</p>
      <div class="mt-5">
        <p class="text-sm font-medium leading-5 text-gray-900">Technology</p>
        <div class="flex mt-1 text-sm leading-5 text-gray-500">{{ project.technology.join(', ') }}</div>
      </div>
      <div class="mt-5">
        <p class="text-sm font-medium leading-5 text-gray-900">Features</p>
        <div class="flex mt-1 text-sm leading-5 text-gray-500">{{ project.features.join(', ') }}</div>
      </div>
    </div>
    <span class="inline-flex flex-shrink-0 mt-5">
      <a
        :href="project.link"
        rel="noopener noreferrer"
        target="_blank"
        class="inline-flex px-4 py-3 text-sm leading-5 border border-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
      >View {{ project.brand }} website</a>
    </span>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>