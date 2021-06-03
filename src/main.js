import 'tailwindcss/tailwind.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'

import DefaultLayout from '@/layouts/Default'

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)
}
