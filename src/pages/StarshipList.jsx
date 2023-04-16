import { useContext } from 'react'
import { StarshipCard } from '../components/StarshipCard'
import { StarshipsContext } from '../context/StarshipsContext'
import { FaChevronDown } from 'react-icons/fa'

export default function StarshipList() {
  const { starships, loading } = useContext(StarshipsContext)

  const handleClick = e => {
    console.log('Load more starships')
  }

  return (
    <section className='flex flex-col gap-2'>
      {loading && <p>Loading...</p>}
      {starships.map((s, i) => (
        <StarshipCard key={i} id={i} name={s.name} model={s.model} />
      ))}
      <button
        type='button'
        onClick={handleClick}
        className='flex items-center border-2 border-yellow-300 px-4 py-1 rounded-lg m-auto hover:border-white'>
        View More <FaChevronDown />
      </button>
    </section>
  )
}
