import '~/main.css'
import 'typeface-red-hat-display'

import DefaultLayout from '~/layouts/Default.vue'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import '~/assets/css/markdown.scss'

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueSimpleMarkdown)
}
