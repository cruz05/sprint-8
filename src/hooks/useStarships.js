import { useEffect, useState, useContext } from 'react'
import { getStarships } from '../services/starships'
import { StarshipsContext } from '../context/StarshipsContext'

export function useStarships() {
  const { starships, setStarships } = useContext(StarshipsContext)
  const [loading, setLoading] = useState(false)
  const [nextPage, setNextPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    getStarships().then(newShips => {
      setLoading(false)
      setStarships([...newShips])
    })
  }, [])

  useEffect(() => {
    if (nextPage === 1 || nextPage > 4) return
    getStarships(nextPage).then(newShips => {
      setStarships(prevShips => prevShips.concat(newShips))
    })
  }, [nextPage])

  return { starships, loading, nextPage, setNextPage }
}
