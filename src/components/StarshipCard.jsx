import { Link } from 'react-router-dom'

export function StarshipCard({ name, model }) {
  const id = name.toLowerCase().replaceAll(' ', '-')
  return (
    <div className='bg-zinc-900 rounded-sm py-3 px-4'>
      <Link to={`/starships/${id}`}>
        <h2>{name}</h2>
        <p className='text-gray-400'>{model}</p>
      </Link>
    </div>
  )
}
