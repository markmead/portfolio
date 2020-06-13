<template>
  <Layout>
    <div class="max-w-screen-xl px-4 pt-12 mx-auto sm:pt-16 md:pt-20 sm:px-6">
      <article>
        <h1 class="text-6xl leading-none font-display">Blog title</h1>
        <time datetime class="text-2xl leading-tight opacity-75 font-display">22nd Jun 2029</time>
        <div class="max-w-3xl mx-auto mt-8 text-lg font-bold opacity-75 sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Massa ultricies mi quis
          hendrerit dolor magna eget. Dapibus ultrices in iaculis nunc sed augue lacus. Neque volutpat ac tincidunt vitae semper quis lectus. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Luctus accumsan
          tortor posuere ac ut. Morbi tristique senectus et netus et malesuada fames ac. Vitae auctor eu augue ut
          lectus arcu. Amet porttitor eget dolor morbi non arcu. Non blandit massa enim nec dui nunc mattis. Erat
          imperdiet sed euismod nisi porta lorem mollis aliquam. Amet mattis vulputate enim nulla aliquet porttitor.
          Euismod nisi porta lorem mollis aliquam ut porttitor. Facilisis gravida neque convallis a cras semper auctor
          neque. Sed pulvinar proin gravida hendrerit lectus a. Nisl vel pretium lectus quam id leo. Pulvinar elementum
          integer enim neque volutpat ac tincidunt. In iaculis nunc sed augue lacus viverra vitae. Maecenas ultricies mi
          eget mauris pharetra et ultrices neque ornare.
          <br />
          <br />Sit amet luctus venenatis lectus magna fringilla urna porttitor. Eleifend donec pretium vulputate sapien nec
          sagittis. Ac orci phasellus egestas tellus rutrum. Lacus vestibulum sed arcu non. Eget dolor morbi non arcu.
          Duis at consectetur lorem donec massa sapien faucibus et molestie. Arcu non sodales neque sodales ut.
          Volutpat diam ut venenatis tellus. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Accumsan
          tortor posuere ac ut consequat semper viverra nam libero. Tristique senectus et netus et. Viverra orci sagittis eu volutpat odio facilisis. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Duis ultricies lacus sed turpis. Quis varius quam quisque id diam vel quam. Erat imperdiet sed euismod nisi porta lorem
          mollis.
          <br />
          <br />Lobortis mattis aliquam faucibus purus. Dictumst quisque sagittis purus sit amet volutpat consequat mauris
          nunc. Ac placerat vestibulum lectus mauris ultrices eros in. Habitasse platea dictumst vestibulum rhoncus est
          pellentesque elit ullamcorper. Maecenas sed enim ut sem viverra aliquet eget. Massa sed elementum tempus
          egestas sed sed risus. Varius vel pharetra vel turpis nunc eget lorem. Blandit volutpat maecenas volutpat
          blandit aliquam etiam. Arcu non odio euismod lacinia at. Nisl nunc mi ipsum faucibus vitae aliquet nec
          ullamcorper. Amet risus nullam eget felis eget nunc lobortis mattis. Etiam non quam lacus suspendisse
          faucibus interdum posuere lorem. Volutpat diam ut venenatis tellus. Fames ac turpis egestas maecenas
          pharetra convallis posuere morbi leo. Sodales ut etiam sit amet nisl purus in mollis. Vitae sapien pellentesque
          <br />
          <br />habitant morbi tristique senectus et. Elementum curabitur vitae nunc sed velit dignissim. Velit euismod in
          pellentesque massa placerat duis ultricies lacus. Ultrices vitae auctor eu augue ut. Tellus mauris a diam
          maecenas.
        </div>
      </article>
      <nav class="grid items-end grid-cols-2 gap-8 py-8">
        <g-link class="block text-right group">
          <g-image src="~/assets/arrow.svg" class="ml-auto" />
          <p
            class="text-xl font-bold leading-none lowercase transition duration-200 ease-in-out transform opacity-75 font-display group-hover:-translate-x-8 group-hover:opacity-100"
          >Prev</p>
        </g-link>

        <g-link class="block text-left group">
          <g-image src="~/assets/arrow.svg" class="mr-auto transform rotate-180" />
          <p
            class="text-xl font-bold leading-none lowercase transition duration-200 ease-in-out transform opacity-75 font-display group-hover:translate-x-8 group-hover:opacity-100"
          >Next</p>
        </g-link>
      </nav>
    </div>
  </Layout>
</template>