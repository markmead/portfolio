import Navbar from '../navbar'

function Layout({ children }) {
  return (
    <div className='max-w-screen-lg px-4 py-8 mx-auto sm:py-12 md:py-16'>
      <Navbar />
      <main className='pt-5 sm:pt-8'>{children}</main>
    </div>
  )
}

export default Layout
