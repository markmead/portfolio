import NavLink from './link'

export default function Navbar() {
  return (
    <nav className='space-x-4 bg-black'>
      <div className='flex items-end justify-center max-w-screen-xl px-4 mx-auto'>
        <NavLink path='/' title='Home' />
        <NavLink path='/about' title='About' />
        <NavLink path='/skills' title='Skills' />
        <NavLink path='/portfolio' title='Portfolio' />
      </div>
    </nav>
  )
}
