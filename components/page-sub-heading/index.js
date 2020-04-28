import styles from './page-sub-heading.module.scss'

export default function PageSubHeading({ title }) {
  return <h1 className={styles.text}>{title}</h1>
}
