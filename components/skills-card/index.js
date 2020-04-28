import Card from '../card'
import DescriptionListDD from '../card/description-list-dd'
import DescriptionListDT from '../card/description-list-dt'

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
    <Card>
      <div className='px-4 py-5 sm:p-0'>
        <dl className='space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200'>
          {skills.map((skill) => {
            return (
              <div className='grid grid-cols-3 gap-4 px-6 py-5' key={skill.title}>
                <DescriptionListDT text={skill.title} />
                <DescriptionListDD text={skill.text} classNames='sm:mt-0 sm:col-span-2' />
              </div>
            )
          })}
        </dl>
      </div>
    </Card>
  )
}

export default SkillsCard
