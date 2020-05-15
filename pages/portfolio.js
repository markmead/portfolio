import Head from 'next/head'

import Layout from '../components/layout'
import PageHeading from '../components/page-heading'
import PageSubHeading from '../components/page-sub-heading'
import PortfolioItem from '../components/portfolio-item'

import projects from '../data/projects'

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Mark Mead - Web Developer, Essex</title>
        <meta name='description' content="A collection of websites I've built" />
      </Head>

      <Layout>
        <PageHeading title='Featured work' />
        <PageSubHeading title="Here's a collection of websites that I have built/worked on" />
        <div className='mt-5 space-y-5 sm:grid sm:grid-cols-2 sm:gap-8 sm:mt-10 sm:space-y-0'>
          {projects.map((project) => {
            return <PortfolioItem data={project} />
          })}
        </div>
      </Layout>
    </>
  )
}

export default Portfolio
