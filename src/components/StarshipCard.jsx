import { Link } from 'react-router-dom'

export function StarshipCard({ id, name, model }) {
  return (
    <div className='bg-zinc-900 rounded-sm mx-auto p-3 w-4/5 sm:w-3/5'>
      <Link to={`/starships/${id}`}>
        <h2>{name}</h2>
        <p className='text-gray-400'>{model}</p>
      </Link>
    </div>
  )
}
