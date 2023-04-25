import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegUser, FaSignOutAlt } from 'react-icons/fa'
import { UserContext } from '../context/UserContext'
import logo from '../assets/logo.webp'
import kids from '../assets/kids.svg'

export function Header() {
  const { isLogged, setIsLogged } = useContext(UserContext)

  const handleClick = () => {
    sessionStorage.removeItem('token')
    setIsLogged(false)
  }

  return (
    <header className='py-3'>
      <div className='w-5/6 mx-auto flex flex-wrap justify-between items-center'>
        <NavLink to='https://www.starwarskids.com/' target='_blank'>
          <img src={kids} alt='Star Wars Kids logo.' />
        </NavLink>
        <img className='max-h-20' src={logo} alt='Star Wars logo.' />
        {isLogged ? (
          <button onClick={handleClick} className='flex items-center gap-2'>
            <FaSignOutAlt /> LOG OUT
          </button>
        ) : (
          <NavLink to={'/login'} className='flex items-center gap-2'>
            <FaRegUser /> SIGN IN
          </NavLink>
        )}
      </div>
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
