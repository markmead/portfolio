<template>
  <div class="px-4 sm:px-6 md:px-8">
    <app-header />

    <main class="py-10 sm:py-12 md:py-16 lg:py-20">
      <slot />
    </main>
    <app-notice />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Notice from '~/components/Notice'

export default {
  components: {
    'app-header': Header,
    'app-notice': Notice
  }
}
</script>
