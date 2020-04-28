import styles from './navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames/bind'

export default function Navbar() {
  const router = useRouter()
  const cn = classNames.bind(styles)

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href='/'>
            <a
              className={cn(styles.link, {
                linkActive: router.pathname === '/',
              })}
              title='Home'
            >
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a
              className={cn(styles.link, {
                linkActive: router.pathname === '/about',
              })}
              title='About'
            >
              About
            </a>
          </Link>
          <Link href='/skills'>
            <a
              className={cn(styles.link, {
                linkActive: router.pathname === '/skills',
              })}
              title='Skills'
            >
              Skills
            </a>
          </Link>
        </div>
      </nav>

      <style jsx>{`
        nav {
          @apply hidden;
        }

        @screen sm {
          nav {
            @apply flex justify-center border-b-2 border-gray-50 items-end;
          }
        }

        .container {
          @apply max-w-screen-lg px-4 mx-auto;
        }

        .link {
          @apply inline-flex items-center px-2 py-3 text-sm font-medium leading-tight text-gray-900 transition duration-150 ease-in-out border-b-2 border-gray-50;
        }

        .link:focus {
          @apply outline-none border-indigo-700;
        }

        .linkActive {
          @apply border-gray-900;
        }
      `}</style>
    </>
  )
}
