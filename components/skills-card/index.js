import Card from '../card'
import DescriptionListDD from '../card/description-list-dd'
import DescriptionListDT from '../card/description-list-dt'

function SkillsCard({ skills }) {
  return (
    <Card classNames='mt-5 sm:mt-8 p-5'>
      <dl className='space-y-4 divide-y divide-gray-100 sm:space-y-0 sm:divide-y-0 sm:grid sm:row-gap-8 sm:col-gap-4 sm:grid-cols-2'>
        {skills.map((skill) => {
          return (
            <div className='sm:col-span-1' key={skill.title}>
              <DescriptionListDT text={skill.title} />
              <DescriptionListDD text={skill.text} classNames='mt-1' />
            </div>
          )
        })}
      </dl>
    </Card>
  )
}

export default SkillsCard
