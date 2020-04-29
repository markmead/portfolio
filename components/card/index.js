import cn from 'classnames'

function Card({ children, classNames }) {
  return (
    <div className={cn('overflow-hidden bg-white rounded-md shadow-xl sm:shadow-2xl md:rounded-lg', classNames)}>
      {children}
    </div>
  )
}

export default Card
