<template>
  <section>
    <h2
      v-if="title"
      class="mb-6 text-2xl font-bold dark:text-white"
      v-text="title"
    />

    <div class="flow-root">
      <div class="-my-5 divide-y divide-gray-100 dark:divide-gray-800">
        <LinkCard
          v-for="edge in edges"
          :key="edge.node.title"
          :text="edge.node.description"
          :title="edge.node.title"
          :to="edge.node.path"
        />
      </div>
    </div>
  </section>
</template>

<script>
import LinkCard from '@/components/LinkCard'

export default {
  components: {
    LinkCard
  },
  props: {
    edges: Array,
    title: String,
  },
}
</script>
