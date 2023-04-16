import { createContext } from 'react'
import useStarships from '../hooks/useStarships'

export const StarshipsContext = createContext([])

export function StarshipsContextProvider({ children }) {
  const { starships, updateShipList, loading } = useStarships()

  return (
    <StarshipsContext.Provider value={{ starships, updateShipList, loading }}>
      {children}
    </StarshipsContext.Provider>
  )
}
