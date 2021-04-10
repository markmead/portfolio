import 'tailwindcss/tailwind.css'
import '@fontsource/inter'
import 'prismjs/themes/prism.css'

import DefaultLayout from '@/layouts/Default'

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)
}
