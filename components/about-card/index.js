import Card from '../card'
import DescriptionListDD from '../card/description-list-dd'
import DescriptionListDT from '../card/description-list-dt'

function AboutCard() {
  const about = [
    { title: 'Name', text: 'Mark Mead' },
    { title: 'Age', text: '23' },
    { title: 'Experience ', text: '4 years' },
    { title: 'Currently watching', text: 'Community' },
    { title: 'Email address', text: 'himarkmead@gmail.com' },
    { title: 'Current job', text: 'Lead Web Developer at Digital Reflow' },
  ]

  const bio = {
    title: 'Bio',
    text:
      'Experienced Lead Web Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Vue.js, Shopify, Ruby on Rails, Content Management Systems (CMS), and a range of front-end technologies.',
  }
  return (
    <Card classNames='mt-5 sm:mt-10'>
      <div className='px-4 py-5 sm:px-6'>
        <dl className='-mt-4 space-y-4 divide-y divide-gray-100 sm:space-y-0 sm:divide-y-0 sm:grid sm:row-gap-8 sm:col-gap-4 sm:grid-cols-2 sm:mt-0'>
          {about.map((info) => {
            return (
              <div className='pt-4 sm:pt-0 sm:col-span-1' key={info.title}>
                <DescriptionListDT text={info.title} />
                <DescriptionListDD text={info.text} classNames='mt-1' />
              </div>
            )
          })}
          <div className='pt-4 sm:pt-0 sm:col-span-2'>
            <DescriptionListDT text={bio.title} />
            <DescriptionListDD text={bio.text} classNames='mt-1' />
          </div>
        </dl>
      </div>
    </Card>
  )
}

export default AboutCard
