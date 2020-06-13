<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-12 mx-auto sm:pt-16 md:pt-20 sm:px-6">
      <h1 class="text-6xl leading-none text-center font-display">Site Info</h1>
      <dl class="max-w-xl mx-auto mt-8 space-y-6">
        <div class="grid grid-cols-2 gap-8">
          <dt class="text-4xl font-bold leading-none font-display">Fonts</dt>
          <dd class="space-y-2 text-right">
            <ul class="mt-2 space-y-2">
              <li class="text-lg font-bold leading-tight opacity-75">Grifter</li>
              <li class="text-lg font-bold leading-tight opacity-75">Red Hat Display</li>
            </ul>
          </dd>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <dt class="text-4xl font-bold leading-none font-display">Frontend</dt>
          <dd class="space-y-2 text-right">
            <ul class="mt-2 space-y-2">
              <li class="text-lg font-bold leading-tight opacity-75">Vue</li>
              <li class="text-lg font-bold leading-tight opacity-75">Gridsome</li>
              <li class="text-lg font-bold leading-tight opacity-75">Tailwind</li>
            </ul>
          </dd>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <dt class="text-4xl font-bold leading-none font-display">Backend</dt>
          <dd class="space-y-2 text-right">
            <ul class="mt-2 space-y-2">
              <li class="text-lg font-bold leading-tight opacity-75">Rails</li>
              <li class="text-lg font-bold leading-tight opacity-75">Administrate</li>
              <li class="text-lg font-bold leading-tight opacity-75">GraphQL</li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </Layout>
</template>
