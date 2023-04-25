import { Link } from 'react-router-dom'
import { formatWithHyphens } from '../utils/utils'

export function StarshipCard({ name, model }) {
  const id = formatWithHyphens(name)
  return (
    <div className='box-border bg-[#1c1c1c] rounded-sm py-3 px-4 hover:border-zinc-600 hover:border'>
      <Link to={`/starships/${id}`}>
        <h2>{name}</h2>
        <p className='text-gray-400'>{model}</p>
      </Link>
    </div>
  )
}
