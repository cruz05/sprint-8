import { createContext, useState } from 'react'
export const StarshipsContext = createContext([])

export function StarshipsContextProvider({ children }) {
  const [starships, setStarships] = useState([])

  return (
    <StarshipsContext.Provider value={{ starships, setStarships }}>
      {children}
    </StarshipsContext.Provider>
  )
}
