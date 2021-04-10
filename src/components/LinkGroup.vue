<template>
  <section>
    <h2 class="mb-6 text-2xl font-bold dark:text-white" v-if="title">{{ title }}</h2>

    <div class="flow-root">
      <div class="-my-5 divide-y divide-gray-100 dark:divide-gray-800">
        <CardLink
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
import CardLink from '@/components/CardLink'

export default {
  components: { CardLink },
  props: {
    edges: Array,
    title: String,
  },
}
</script>
