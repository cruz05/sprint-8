import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const UserContext = createContext({})

export default function UserContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(!!sessionStorage.getItem('token'))
  const [credentials, setCredentials] = useLocalStorage({
    key: 'credentials',
    initialValue: []
  })

  return (
    <UserContext.Provider
      value={{ credentials, setCredentials, isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  )
}
