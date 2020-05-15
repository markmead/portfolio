import Head from 'next/head'

import Layout from '../components/layout'
import PageHeading from '../components/page-heading'
import PageSubHeading from '../components/page-sub-heading'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mark Mead - Web Developer, Essex</title>
        <meta name='description' content='A blog will be here soon' />
      </Head>

      <Layout>
        <PageHeading title='🚧 Under construction 🚧' />
        <PageSubHeading title='I will be building a Ruby on Rails app that will manage the blogs' />
      </Layout>
    </>
  )
}
