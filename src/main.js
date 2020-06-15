import '~/main.css'
import '~/assets/css/content.scss'
import 'typeface-red-hat-display'

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
