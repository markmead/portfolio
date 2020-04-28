function AboutCard() {
  const about = [
    { title: 'Name', text: 'Mark Mead' },
    { title: 'Age', text: '23' },
    { title: 'Experience ', text: '4 years' },
    { title: 'Music', text: 'I like most music' },
    { title: 'Email address', text: 'himarkmead@gmail.com' },
    { title: 'Current job', text: 'Web Developer at Digital Reflow' },
  ]
  return (
    <div className='mt-5 overflow-hidden bg-white rounded-md shadow-xl sm:shadow-2xl md:rounded-lg md:mt-10'>
      <div className='px-4 py-5 sm:px-6'>
        <dl className='grid grid-cols-1 row-gap-8 col-gap-4 sm:grid-cols-2'>
          {about.map((info) => {
            return (
              <div className='sm:col-span-1'>
                <dt className='text-sm font-medium leading-5 text-gray-500'>{info.title}</dt>
                <dd className='mt-1 text-sm leading-5 text-gray-900'>{info.text}</dd>
              </div>
            )
          })}
          <div className='sm:col-span-2'>
            <dt className='text-sm font-medium leading-5 text-gray-500'>Bio</dt>
            <dd className='mt-1 text-sm leading-5 text-gray-900'>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default AboutCard
