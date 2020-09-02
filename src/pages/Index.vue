<template>
  <Layout>
    <Title text="Mark" />
    <Content :content="content" />
  </Layout>
</template>

<script>
import Title from '@/components/Title'
import Content from '@/components/Content'
import { content } from '../assets/data/index'

export default {
  data() {
    return {
      content,
    }
  },
  components: {
    Title,
    Content,
  },
}
</script>