import Link from 'next/link'
import { useRouter } from 'next/router'

import cn from 'classnames'

function NavLink({ path, title }) {
  const router = useRouter()
  const linkClass =
    'px-3 py-4 text-sm text-white leading-tight focus:outline-none focus:bg-gray-200 focus:text-black focus:underline hover:underline hover:bg-blue-600 active:bg-blue-600'
  const isActive = router.pathname === path

  return (
    <Link href={path}>
      <a className={cn(linkClass, { 'underline bg-blue-600': isActive })} title={title}>
        {title}
      </a>
    </Link>
  )
}

export default NavLink
