import styles from './page-heading.module.scss'

export default function PageHeading({ title }) {
  return <h1 className={styles.text}>{title}</h1>
}
