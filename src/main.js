import '@/main.scss'

import 'tailwindcss/tailwind.css'
import 'typeface-roboto-mono'

import DefaultLayout from '@/layouts/Default'

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)
}
