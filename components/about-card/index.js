import styles from './about-card.module.scss'

function AboutCard() {
  const about = [
    { title: 'Name', text: 'Mark Mead' },
    { title: 'Age', text: '23' },
    { title: 'Experience ', text: '4 years' },
    { title: 'Music', text: 'I like most music' },
    { title: 'Email address', text: 'himarkmead@gmail.com' },
    { title: 'Current job', text: 'Web Developer at Digital Reflow' },
  ]
  return (
    <div className={styles.wrapper}>
      <div className='px-4 py-5 sm:px-6'>
        <dl className={styles.dlGrid}>
          {about.map((info) => {
            return (
              <div className='sm:col-span-1'>
                <dt className={styles.title}>{info.title}</dt>
                <dd className={styles.text}>{info.text}</dd>
              </div>
            )
          })}
          <div className='sm:col-span-2'>
            <dt className={styles.title}>Bio</dt>
            <dd className={styles.text}>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default AboutCard
