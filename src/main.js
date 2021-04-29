import 'tailwindcss/tailwind.css'
import '@fontsource/inter'

import DefaultLayout from '@/layouts/Default'

export default function(Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.script.push({
    src: 'https://gumroad.com/js/gumroad.js',
    body: true,
  })
}
