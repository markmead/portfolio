function PortfolioItem({ data }) {
  return (
    <div className='flex flex-col justify-between p-6 border border-gray-200 sm:rounded-md'>
      <div class='flex-1'>
        <h3 class='text-xl leading-7 font-semibold text-gray-900'>{data.brand}</h3>
        <p class='mt-3 text-base leading-6 text-gray-500'>{data.description}</p>
        <div class='mt-5'>
          <p class='text-sm leading-5 font-medium text-gray-900'>Technology</p>
          <div class='flex text-sm leading-5 text-gray-500 mt-1'>{data.technology.join(', ')}</div>
        </div>
        <div class='mt-5'>
          <p class='text-sm leading-5 font-medium text-gray-900'>Features</p>
          <div class='flex text-sm leading-5 text-gray-500 mt-1'>{data.features.join(', ')}</div>
        </div>
      </div>
      <span class='flex-shrink-0 inline-flex mt-5'>
        <a
          href={data.link}
          rel='noopener noreferrer'
          target='_blank'
          class='px-4 py-3 inline-flex border-gray-200 border text-sm hover:border-blue-600 leading-5 rounded-md transition-all hover:shadow-lg duration-150 ease-in-out bg-gray-50'
        >
          View {data.brand} website
        </a>
      </span>
    </div>
  )
}

export default PortfolioItem
