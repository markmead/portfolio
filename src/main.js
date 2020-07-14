import '@/main.css'

import DefaultLayout from '@/layouts/Default'

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
