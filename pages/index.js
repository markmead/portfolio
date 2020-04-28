import Head from 'next/head'

import Layout from '../components/layout'
import PageHeading from '../components/page-heading'
import PageSubHeading from '../components/page-sub-heading'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello | Mark Mead - Web Developer, Essex</title>
      </Head>

      <Layout>
        <PageHeading title="👋 Hi I'm Mark" />
        <PageSubHeading title='A web developer that builds mobile first, performance driven websites' />
      </Layout>
    </>
  )
}
