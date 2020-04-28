import styles from './layout.module.scss'

import Navbar from '../navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main data-name='layout' className={styles.main}>
        {children}
      </main>
    </>
  )
}
