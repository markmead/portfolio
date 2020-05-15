import social from '../../data/social'

function Social() {
  return (
    <>
      <nav className='flex items-center space-x-4'>
        {social.map((item) => (
          <span class='flex-shrink-0 inline-flex mt-5'>
            <a
              href={item.link}
              rel='noopener noreferrer'
              target='_blank'
              class='px-4 py-3 inline-flex text-sm border border-gray-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white leading-5'
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
