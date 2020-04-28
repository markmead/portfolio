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
      <div className='mt-5 overflow-hidden bg-white rounded-md shadow-xl sm:shadow-2xl sm:rounded-lg sm:mt-10'>
        <div className='px-4 py-5 sm:p-0'>
          <dl className='space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200'>
            {skills.map((skill) => {
              return (
                <div className='grid grid-cols-3 gap-4 px-6 py-5' key={skill.title}>
                  <dt className='text-sm font-medium leading-5 text-gray-500'>{skill.title}</dt>
                  <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2'>{skill.text}</dd>
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
