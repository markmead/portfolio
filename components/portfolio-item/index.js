function PortfolioItem({ data }) {
  return (
    <div className='flex flex-col justify-between p-6 bg-gray-50'>
      <div className='flex-1'>
        <h3 className='text-xl font-semibold leading-7 text-gray-900'>{data.brand}</h3>
        <p className='mt-3 text-base leading-6 text-gray-500'>{data.description}</p>
        <div className='mt-5'>
          <p className='text-sm font-medium leading-5 text-gray-900'>Technology</p>
          <div className='flex mt-1 text-sm leading-5 text-gray-500'>{data.technology.join(', ')}</div>
        </div>
        <div className='mt-5'>
          <p className='text-sm font-medium leading-5 text-gray-900'>Features</p>
          <div className='flex mt-1 text-sm leading-5 text-gray-500'>{data.features.join(', ')}</div>
        </div>
      </div>
      <span className='inline-flex flex-shrink-0 mt-5'>
        <a
          href={data.link}
          rel='noopener noreferrer'
          target='_blank'
          className='inline-flex px-4 py-3 text-sm leading-5 border border-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white'
        >
          View {data.brand} website
        </a>
      </span>
    </div>
  )
}

export default PortfolioItem
