import { useEffect, useState } from 'react'
import StarshipCard from './components/StarshipCard'
import { Header } from './components/Header'

const API_URL = 'https://swapi.dev/api/starships/'

function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const { results } = data
        setStarships(prev => [...prev, ...results])
      })
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className='flex flex-col gap-2'>
          {starships.map((s, i) => (
            <StarshipCard
              key={i}
              name={s.name}
              model={s.model}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
