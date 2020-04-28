import styles from './skills-card.module.scss'

function SkillsCard() {
  const skills = [
    { title: 'HTML5', text: 'Haml, Slim, Erb and Pug/Jade' },
    { title: 'CSS', text: 'SCSS, SASS, Stylus' },
    { title: 'JavaScript', text: 'jQuery, React, Vue, Stimulus & Alpine' },
    { title: 'Ruby', text: 'Ruby on Rails & RSpec' },
    { title: 'Hosting', text: 'Heroku, Netlify & Vercel' },
    { title: 'Database/Querying', text: 'Postgres, SQL & GraphQL' },
    { title: 'Static Site Generation', text: 'Next, Gatsby, Gridsome, Nuxt & Jekyll' },
    { title: 'CMS', text: 'Spina, Netlify, WordPress, Contentful & Forestry' },
    { title: 'CSS Frameworks', text: 'Tailwind, Zurb Foundation, Bootstrap, Skeleton & GOVUK Design System' },
  ]

  return (
    <>
      <div className={styles.wrapper}>
        <div className='px-4 py-5 sm:p-0'>
          <dl className='space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200'>
            {skills.map((skill) => {
              return (
                <div className={styles.contentGrid} key={skill.title}>
                  <dt className={styles.title}>{skill.title}</dt>
                  <dd className={styles.text}>{skill.text}</dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </>
  )
}

export default SkillsCard
