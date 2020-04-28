import Navbar from '../navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='max-w-screen-lg px-4 py-8 mx-auto sm:py-12 md:py-16'>{children}</main>
    </>
  )
}
