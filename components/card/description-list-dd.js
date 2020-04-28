import cn from 'classnames'

function DescriptionListDD({ text, classNames }) {
  return <dd className={cn('text-sm leading-5 text-gray-900', classNames)}>{text}</dd>
}

export default DescriptionListDD
