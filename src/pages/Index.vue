<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-20 mx-auto sm:px-6">
      <h1 class="text-4xl leading-none md:text-6xl font-display">Mark Mead</h1>
      <h2 class="text-3xl leading-tight opacity-75 md:text-5xl font-display">
        a web developer powered by Rails &amp; JavaScript
      </h2>
      <div class="grid grid-cols-12 gap-8 mt-8">
        <div class="col-span-6 lg:col-span-4">
          <figure>
            <g-image src="~/assets/images/me-at-work.jpg" class="w-full" alt="Working in the office" />
            <figcaption class="mt-1 text-xs font-bold text-center opacity-75 md:text-sm">
              Myself (left) and Jordi (right) pairing on a project
            </figcaption>
          </figure>
        </div>
        <div class="col-span-6 lg:col-span-8">
          <nav class="space-y-6">
            <app-nav-link-in-body path="/blog" text="Blog" />
            <app-nav-link-in-body path="/work" text="Work" />
            <app-nav-link-in-body path="/setup" text="Setup" />
            <app-nav-link-in-body path="/about" text="About" />
            <app-nav-link-in-body path="/resources" text="Resources" />
            <app-nav-link-in-body path="/site-info" text="Site info" />
            <app-nav-link-in-body path="/negative-hover" text="Negative hover" />
          </nav>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import NavLinkInBody from '~/components/NavLinkInBody'
import axios from 'axios'

export default {
  metaInfo: {
    title: '👋 Welcome',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          "Hello, I'm Mark Mead. I'm a 23 year old web developer who has been building websites for 4 years. Working with Ruby on Rails, Javascript, Vue, React and more.",
      },
    ],
  },
  components: {
    'app-nav-link-in-body': NavLinkInBody,
  },
  beforeMount() {
    axios.get('https://dev.to/api/articles?username=markmead').then((res) => console.log(res))
  },
}
</script>
