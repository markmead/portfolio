import Head from 'next/head'

import Layout from '../components/layout'
import PageHeading from '../components/page-heading'
import PageSubHeading from '../components/page-sub-heading'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello | Mark Mead - Web Developer, Essex</title>
        <meta name='description' content='23 year old web developer specialising in Essex' />
      </Head>

      <Layout>
        <PageHeading title="👋 Hi I'm Mark" />
        <PageSubHeading title='A web developer that builds mobile first, performance driven websites' />
      </Layout>
    </>
  )
}
