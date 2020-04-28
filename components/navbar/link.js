import Link from 'next/link'
import { useRouter } from 'next/router'

import cn from 'classnames'

function NavLink({ path, title }) {
  const router = useRouter()
  const linkClasses =
    'inline-flex items-center px-3 py-4 text-sm font-medium leading-tight text-gray-900 transition duration-150 ease-in-out border-b-2 border-gray-50 focus:outline-none focus:border-gray-400'

  return (
    <Link href={path}>
      <a
        className={cn(linkClasses, {
          'border-gray-900': router.pathname === path,
        })}
        title={title}
      >
        {title}
      </a>
    </Link>
  )
}

export default NavLink
