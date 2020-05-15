import Head from 'next/head'

import Layout from '../components/layout'
import PageHeading from '../components/page-heading'
import PageSubHeading from '../components/page-sub-heading'
import SkillsCard from '../components/skills-card'

import skills from '../data/skills'

function About() {
  return (
    <>
      <Head>
        <title>About Me | Mark Mead - Web Developer, Essex</title>
        <meta name='description' content='What I use to create mobile first, performance driven websites' />
      </Head>

      <Layout>
        <PageHeading title="What I've been using" />
        <PageSubHeading title="I've had the pleasure of working with some great technologies" />
        <SkillsCard skills={skills} />
      </Layout>
    </>
  )
}

export default About
