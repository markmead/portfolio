import '@/main.scss'
import ExternalLinks from '@/assets/js/external-links.js'

import 'tailwindcss/tailwind.css'
import 'typeface-roboto-mono'

import DefaultLayout from '@/layouts/Default'

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.prototype.$externalLinks = ExternalLinks
}
