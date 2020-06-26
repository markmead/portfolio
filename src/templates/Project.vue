<template lang="pug">
  Layout
    article
      Spacer
        Spacer(classes="space-y-4")
          Title(:text="$page.project.title")
          Paragraph(:text="$page.project.description")
        Tags(:tags="$page.project.tech" classes="-mt-4")
        Link(:path="$page.project.website" text="View website")
        Break
        Content(:content="$page.project.content")
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
import Paragraph from '@/components/Text/Paragraph'
import Title from '@/components/Text/Title'
import Spacer from '@/components/Flow/Spacer'
import Break from '@/components/Flow/Break'
import Content from '@/components/Text/Content'
import Link from '@/components/UI/Link'
import Tags from '@/components/UI/Tags'

export default {
  components: {
    Paragraph,
    Spacer,
    Break,
    Title,
    Link,
    Content,
    Tags
  }
}
</script>
