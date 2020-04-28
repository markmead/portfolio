import cn from 'classnames'

function DescriptionListDT({ text, classNames }) {
  return <dt className={cn('text-sm font-medium leading-5 text-gray-500', classNames)}>{text}</dt>
}

export default DescriptionListDT
