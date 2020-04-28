import Card from '../card'
import DescriptionListDD from '../card/description-list-dd'
import DescriptionListDT from '../card/description-list-dt'

function AboutCard() {
  const about = [
    { title: 'Name', text: 'Mark Mead' },
    { title: 'Age', text: '23' },
    { title: 'Experience ', text: '4 years' },
    { title: 'Music', text: 'I like most music' },
    { title: 'Email address', text: 'himarkmead@gmail.com' },
    { title: 'Current job', text: 'Web Developer at Digital Reflow' },
  ]

  const bio = {
    title: 'Bio',
    text: 'Hello',
  }
  return (
    <Card>
      <div className='px-4 py-5 sm:px-6'>
        <dl className='grid grid-cols-1 row-gap-8 col-gap-4 sm:grid-cols-2'>
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
      </div>
    </Card>
  )
}

export default AboutCard
