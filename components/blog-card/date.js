import { parseISO, format } from 'date-fns'

function Date({ value }) {
  const date = parseISO(value)
  return <time dateTime={value}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date
