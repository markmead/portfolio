import Head from 'next/head'

import { getBlogs } from '../api/blogs'

import Layout from '../../components/layout'
import PageHeading from '../../components/page-heading'
import PageSubHeading from '../../components/page-sub-heading'
import BlogCard from '../../components/blog-card'

function Blog({ blogs }) {
  return (
    <>
      <Head>
        <title>Blog | Mark Mead - Web Developer, Essex</title>
        <meta name='description' content='A blog will be here soon' />
      </Head>

      <Layout>
        <PageHeading title='🚧 Under construction 🚧' />
        <PageSubHeading title='90% of the work has been done...' />

        <div className='max-w-lg mx-auto mt-5 space-y-5 sm:mt-10'>
          {blogs && blogs.map((item) => <BlogCard item={item} key={item.id} />)}
        </div>
      </Layout>
    </>
  )
}

Blog.getInitialProps = async () => {
  const res = await getBlogs()
  if (!res) return {}

  const json = await res.json()
  return { blogs: json }
}

export default Blog
