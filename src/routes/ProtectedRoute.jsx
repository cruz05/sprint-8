import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export function ProtectedRoute() {
  const { isLogged } = useContext(UserContext)
  return isLogged ? <Outlet /> : <Navigate to='/login' />
}
