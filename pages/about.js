import Head from 'next/head'

import Layout from '../components/layout'
import PageHeading from '../components/page-heading'
import PageSubHeading from '../components/page-sub-heading'
import AboutCard from '../components/about-card'

function About() {
  return (
    <>
      <Head>
        <title>About Me | Mark Mead - Web Developer, Essex</title>
      </Head>

      <Layout>
        <PageHeading title="Here's a bit about me" />
        <PageSubHeading title='A web developer that builds mobile first, performance driven websites' />
        <AboutCard />
      </Layout>
    </>
  )
}

export default About
