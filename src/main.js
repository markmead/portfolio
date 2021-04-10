import 'tailwindcss/tailwind.css'
import '@fontsource/inter'
import IsDarkMode from '@/assets/js/is-dark-mode.js'

import DefaultLayout from '@/layouts/Default'

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.prototype.$isDarkMode = IsDarkMode
}
