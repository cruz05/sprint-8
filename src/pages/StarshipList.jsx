import { StarshipCard } from '../components/StarshipCard'
import { useStarships } from '../hooks/useStarships'
import { FaChevronDown } from 'react-icons/fa'

export default function StarshipList() {
  const { starships, loading, nextPage, setNextPage } = useStarships()

  const handleClick = e => {
    setNextPage(prev => prev + 1)
  }

  return (
    <div className='flex flex-col gap-2 w-full sm:min-w-[450px]'>
      {loading && <p className='text-center'>Loading...</p>}
      {!loading && (
        <>
          {starships.map((s, i) => (
            <StarshipCard key={i} id={i} name={s.name} model={s.model} />
          ))}
          {nextPage < 4 && (
            <button
              type='button'
              onClick={handleClick}
              className='flex items-center border-2 border-yellow-300 px-4 py-1 rounded-lg m-auto hover:border-white'>
              View More <FaChevronDown />
            </button>
          )}
        </>
      )}
    </div>
  )
}
