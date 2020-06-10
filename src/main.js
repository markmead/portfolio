// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/main.css'
import 'typeface-red-hat-display'
import 'typeface-vidaloka'

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
