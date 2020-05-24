<template>
  <Layout>
    <app-heading title="Featured work" />
    <app-sub-heading title="Here's a collection of websites that I have built/worked on" />
    <div class="mt-5 space-y-5 sm:grid sm:grid-cols-2 sm:gap-8 sm:mt-10 sm:space-y-0">
      <app-portfolio-item v-for="project in projects" :project="project" :key="project.title" />
    </div>
  </Layout>
</template>

<script>
import Heading from '~/components/Heading'
import SubHeading from '~/components/SubHeading'
import PortfolioItem from '~/components/PortfolioItem'

import projects from '../data/projects'

export default {
  metaInfo: {
    title: 'My Work',
    meta: [
      {
        name: 'description',
        content: "A collection of websites I've built"
      }
    ]
  },
  data() {
    return {
      projects
    }
  },
  components: {
    'app-heading': Heading,
    'app-sub-heading': SubHeading,
    'app-portfolio-item': PortfolioItem
  }
}
</script>

