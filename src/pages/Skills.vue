<template>
  <Layout>
    <app-heading title="What I've been using" />
    <app-sub-heading title="I've had the pleasure of working with some great technologies" />
    <app-skills-card :skills="skills" />
  </Layout>
</template>

<script>
import Heading from '~/components/Heading'
import SubHeading from '~/components/SubHeading'
import SkillsCard from '~/components/SkillsCard'

import skills from '../data/skills'

export default {
  metaInfo: {
    title: 'Tech Used',
    meta: [
      {
        name: 'description',
        content: '23 year old Ruby on Rails developer in Essex.'
      }
    ]
  },
  data() {
    return { skills }
  },
  components: {
    'app-heading': Heading,
    'app-sub-heading': SubHeading,
    'app-skills-card': SkillsCard
  }
}
</script>
