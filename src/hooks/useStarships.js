import { useEffect, useState } from 'react'
import { getStarships } from '../services/starships'

export default function useStarships() {
  const [starships, setStarships] = useState([])
  const [loading, setLoading] = useState(false)

  const updateShipList = () => {
    setLoading(true)
    getStarships().then(newShips => {
      setLoading(false)
      setStarships([...newShips])
      console.log(newShips)
    })
  }
  useEffect(updateShipList, [])

  return { starships, updateShipList, loading }
}
