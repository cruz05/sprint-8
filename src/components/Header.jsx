import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'

export function Header() {
  return (
    <header className='py-3'>
      <img className='w-52 m-auto' src={logo} alt='Star Wars logo.' />
      <nav className='flex justify-center gap-3 border-y border-slate-600 border-solid text-gray-500 px-1 mt-2'>
        <NavLink
          className={({ isActive }) => (isActive ? 'border-b' : undefined)}
          to='/'>
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'border-b' : undefined)}
          to='starships'>
          STARSHIPS
        </NavLink>
      </nav>
    </header>
  )
}
