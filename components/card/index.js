function Card({ children }) {
  return (
    <div className='mt-5 overflow-hidden bg-white rounded-md shadow-xl sm:shadow-2xl md:rounded-lg md:mt-10'>
      {children}
    </div>
  )
}

export default Card
