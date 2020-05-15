import Head from 'next/head'

import Layout from '../components/layout'
import PageHeading from '../components/page-heading'
import PageSubHeading from '../components/page-sub-heading'
import AboutCard from '../components/about-card'

import about from '../data/about'

function About() {
  return (
    <>
      <Head>
        <title>About Me | Mark Mead - Web Developer, Essex</title>
        <meta name='description' content='Find out a little more about me' />
      </Head>

      <Layout>
        <PageHeading title="Here's a bit about me" />
        <PageSubHeading title='23 year old lead web developer from Essex' />
        <AboutCard about={about} />
      </Layout>
    </>
  )
}

export default About
