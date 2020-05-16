import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'
import PageHeading from '../../components/page-heading'
import PageSubHeading from '../../components/page-sub-heading'
import { getBlog } from '../api/blogs'

function Post({ post }) {
  const postTitle = post ? post.title : 'Uh-oh! We lost the blog'

  return (
    <>
      <Head>
        <title>Hello | Mark Mead - Web Developer, Essex</title>
        <meta name='description' content='23 year old web developer specialising in Essex' />
      </Head>

      <Layout>
        <PageHeading title={postTitle} />
        <PageSubHeading title='A web developer that builds mobile first, performance driven websites' />

        {post && (
          <div className='max-w-2xl p-5 mx-auto mt-5 sm:mt-10 bg-gray-50'>
            <div>{post.body}</div>
          </div>
        )}

        {!post && (
          <div className='mt-5 text-center sm:mt-10'>
            <Link href='/blogs'>
              <a className='text-blue-600 hover:underline'>Back to blogs</a>
            </Link>
          </div>
        )}
      </Layout>
    </>
  )
}

Post.getInitialProps = async ({ query }) => {
  const res = await getBlog(query.id)
  if (!res) return {}

  const json = await res.json()
  return { post: json }
}

export default Post
