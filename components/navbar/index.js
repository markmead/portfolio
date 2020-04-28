import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

export default function Navbar() {
  const router = useRouter()
  const linkClasses =
    'inline-flex items-center px-2 py-3 text-sm font-medium leading-tight text-gray-900 transition duration-150 ease-in-out border-b-2 border-gray-50 focus:outline-none focus:border-gray-400'

  return (
    <>
      <nav className='flex items-end justify-center border-b-2 border-gray-50'>
        <div className='max-w-screen-xl px-4 mx-auto'>
          <Link href='/'>
            <a
              className={cn(linkClasses, {
                'border-gray-900': router.pathname === '/',
              })}
              title='Home'
            >
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a
              className={cn(linkClasses, {
                'border-gray-900': router.pathname === '/about',
              })}
              title='About'
            >
              About
            </a>
          </Link>
          <Link href='/skills'>
            <a
              className={cn(linkClasses, {
                'border-gray-900': router.pathname === '/skills',
              })}
              title='Skills'
            >
              Skills
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
