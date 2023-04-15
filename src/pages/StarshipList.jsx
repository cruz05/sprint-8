import { useEffect, useState } from 'react'
import { StarshipCard } from '../components/StarshipCard'

const API_URL = 'https://swapi.dev/api/starships/'

export default function StarshipList() {
  const [starships, setStarships] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const { results } = data
        // dont repeat the state
        setStarships([...results])
        setLoading(false)
        console.log(results)
      })
  }, [])

  return (
    <section className='flex flex-col gap-2'>
      {loading && <p>Loading...</p>}
      {starships.map((s, i) => (
        <StarshipCard key={i} id={i} name={s.name} model={s.model} />
      ))}
    </section>
  )
}
