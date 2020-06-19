import '@/main.css'
import 'typeface-vidaloka'
import 'typeface-roboto'

import DefaultLayout from '@/layouts/Default'

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
