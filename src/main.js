import '@/main.scss'

import 'typeface-roboto-mono'
import 'tailwindcss/tailwind.css'

import DefaultLayout from '@/layouts/Default'

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)
}
