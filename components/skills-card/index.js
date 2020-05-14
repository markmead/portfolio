import Card from '../card'
import DescriptionListDD from '../card/description-list-dd'
import DescriptionListDT from '../card/description-list-dt'

function SkillsCard() {
  const skills = [
    { title: 'HTML5', text: 'Haml, Slim, Erb and Pug/Jade' },
    { title: 'CSS', text: 'SCSS, SASS & Stylus' },
    { title: 'JavaScript', text: 'jQuery, React, Vue, Stimulus & Alpine' },
    { title: 'Ruby', text: 'Ruby on Rails & RSpec' },
    { title: 'Hosting', text: 'Heroku, Netlify & Vercel' },
    { title: 'Database & Querying', text: 'Postgres, SQL & GraphQL' },
    { title: 'Static Site Generation', text: 'Next, Gatsby, Gridsome, Nuxt & Jekyll' },
    { title: 'eCommerce', text: 'Soliuds & Shopify' },
    { title: 'CMS', text: 'Spina, Netlify, WordPress, Contentful & Forestry' },
    { title: 'CSS Frameworks', text: 'Tailwind, Zurb Foundation, Bootstrap & GOVUK Design System' },
    { title: 'Tools', text: 'Schema Markup, Webpack, PostCSS, Babel' },
    { title: 'Other', text: 'Webflow & Adobe XD' },
  ]

  return (
    <Card classNames='mt-5 sm:mt-10'>
      <div className='px-4 py-5 sm:p-0'>
        <dl className='-mt-4 space-y-4 divide-y divide-gray-100 sm:space-y-0 sm:mt-0'>
          {skills.map((skill) => {
            return (
              <div className='grid grid-cols-3 gap-4 pt-4 sm:px-6 sm:py-5' key={skill.title}>
                <DescriptionListDT text={skill.title} />
                <DescriptionListDD text={skill.text} classNames='sm:mt-0 col-span-2' />
              </div>
            )
          })}
        </dl>
      </div>
    </Card>
  )
}

export default SkillsCard
