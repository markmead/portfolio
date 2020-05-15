import social from '../../data/social'

function Social() {
  return (
    <>
      <nav className='flex items-center space-x-4'>
        {social.map((item) => (
          <span className='inline-flex flex-shrink-0 mt-5'>
            <a
              href={item.link}
              rel='noopener noreferrer'
              target='_blank'
              className='inline-flex px-4 py-3 text-sm leading-5 border border-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white'
            >
              {item.name}
            </a>
          </span>
        ))}
      </nav>
    </>
  )
}

export default Social
