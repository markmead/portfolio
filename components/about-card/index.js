import Card from '../card'
import DescriptionListDD from '../card/description-list-dd'
import DescriptionListDT from '../card/description-list-dt'

function AboutCard({ about }) {
  const bio = {
    title: 'Bio',
    text:
      'Experienced Lead Web Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Vue.js, Shopify, Ruby on Rails, Content Management Systems (CMS), and a range of front-end technologies.',
  }
  return (
    <Card classNames='mt-5 sm:mt-8 p-5'>
      <dl className='space-y-4 divide-y divide-gray-100 sm:space-y-0 sm:divide-y-0 sm:grid sm:row-gap-8 sm:col-gap-4 sm:grid-cols-3'>
        {about.map((info) => {
          return (
            <div className='sm:col-span-1' key={info.title}>
              <DescriptionListDT text={info.title} />
              <DescriptionListDD text={info.text} classNames='mt-1' />
            </div>
          )
        })}
        <div className='sm:col-span-2'>
          <DescriptionListDT text={bio.title} />
          <DescriptionListDD text={bio.text} classNames='mt-1' />
        </div>
      </dl>
    </Card>
  )
}

export default AboutCard
