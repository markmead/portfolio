import Link from 'next/link'
import Date from '../blog-card/date'

function BlogCard({ item }) {
  return (
    <Link href='/blogs/[id]' as={`/blogs/${item.id}`}>
      <a className='flex flex-col p-6 bg-gray-50 hover:bg-blue-600 group'>
        <h3 className='mt-1 text-xl font-semibold leading-7 group-hover:text-white'>{item.title}</h3>
        <p className='mt-3 text-base leading-6 text-gray-500 truncate group-hover:text-gray-100'>{item.body}</p>
        <div className='flex items-center pt-5 mt-5 border-t border-gray-200'>
          <div className='flex text-sm leading-5 text-gray-500 group-hover:text-white'>
            <Date value={item.updated_at} />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default BlogCard
