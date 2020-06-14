<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-12 mx-auto sm:pt-16 md:pt-20 sm:px-6">
      <h1 class="text-6xl leading-none font-display">Mark Mead</h1>
      <h2 class="text-5xl leading-tight opacity-75 font-display">a web developer powered by Rails</h2>
      <div class="grid grid-cols-12 gap-8 mt-8">
        <div class="col-span-4">
          <figure>
            <g-image
              src="~/assets/images/me-at-work.jpg"
              class="w-full"
              alt="Working in the office"
            />
            <figcaption
              class="mt-1 text-sm font-bold text-center opacity-75"
            >Myself (left) and Jordi (right) pairing on a project</figcaption>
          </figure>
        </div>
        <div class="col-span-8">
          <nav class="space-y-6">
            <app-nav-link-in-body path="/blog" text="Blog" />
            <app-nav-link-in-body path="/work" text="Work" />
            <app-nav-link-in-body path="/setup" text="Setup" />
            <app-nav-link-in-body path="/resources" text="Resources" />
            <app-nav-link-in-body path="/site-info" text="Site info" />
          </nav>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import NavLinkInBody from '~/components/NavLinkInBody'

export default {
  components: {
    'app-nav-link-in-body': NavLinkInBody
  }
}
</script>
