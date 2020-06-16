<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-20 mx-auto sm:px-6">
      <h1 class="text-4xl leading-none text-center md:text-6xl font-display">Negative Hover</h1>
      <small class="block mt-4 text-sm italic font-bold text-center opacity-75">Hover on the blocks 👇</small>
      <div class="grid grid-cols-4 gap-8 mt-8" data-negative-hover="example">
        <div
          v-for="i in 12"
          :key="i"
          class="w-full h-40 transition duration-150 ease-in-out bg-white"
          data-negative-hover-target="example"
        ></div>
      </div>
      <div class="max-w-3xl mx-auto mt-8 content">
        <h2>How</h2>
        <h3>Add your data attributes</h3>
        <p>It has a parent:</p>
        <code>data-negative-hover="example"</code>
        <p>And targets:</p>
        <code>data-negative-hover-target="example"</code>
        <p>
          <small>These need to match the value you pass to the <code>name</code> option</small>
        </p>
        <hr />
        <h3>Import the JS</h3>
        <code>import negativeHover from 'negative-hover'</code>
        <hr />
        <h3>Pass in your options and init the JS</h3>
        <code>new negativeHover({ name: 'example' }).init()</code>
        <p>The options are:</p>
        <ul>
          <li><code>name</code> &nbsp; which is the name you've added to to the data atrributes</li>
          <li><code>inactiveClass</code> &nbsp; which is the name of the class you want to use</li>
        </ul>
        <p>
          <small>The <code>inactiveClass</code> option has a default of <code>inactive-hover-target</code></small>
        </p>
        <hr />
        <h3>The CSS</h3>
        <code>
          .inactive-hover-target { @apply opacity-25; }
        </code>
        <p>
          <small
            >The <code>@apply</code> is from Tailwind, check it out here
            <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a></small
          >
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
import negativeHover from 'negative-hover'

export default {
  mounted() {
    new negativeHover({ name: 'example' }).init()
  },
}
</script>

<style lang="scss" scoped>
.inactive-hover-target {
  @apply opacity-25;
}
</style>
