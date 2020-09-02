<template>
  <Layout>
    <Title text="Mark" />
    <Content classes="mt-8" :content="content" />
  </Layout>
</template>

<script>
import Title from '@/components/Title'
import Content from '@/components/Content'

const content = `<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Amet dictum sit amet justo donec. Egestas
        integer eget aliquet nibh praesent tristique magna.
      </p>
      <p>
        Arcu bibendum at varius vel pharetra vel turpis nunc.
        Integer feugiat scelerisque varius morbi. Eget felis eget
        nunc lobortis mattis aliquam. Magna sit amet purus
        gravida quis blandit turpis cursus.
      </p>
      <p>
        Tellus at urna condimentum mattis pellentesque id. Eu
        nisl nunc mi ipsum faucibus. Nulla malesuada
        pellentesque elit eget gravida cum sociis. Porta nibh
        venenatis cras sed felis eget velit aliquet sagittis. Quis
        ipsum suspendisse ultrices gravida dictum fusce ut
        placerat.
      </p>`

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