import cn from 'classnames'

function Card({ children, classNames }) {
  return <div className={cn('overflow-hidden border-2 border-dashed border-gray-200', classNames)}>{children}</div>
}

export default Card
