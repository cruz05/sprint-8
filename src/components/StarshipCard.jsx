export default function StarshipCard({ name, model }) {
  return (
    <div className='text-white bg-zinc-900 rounded-sm mx-auto py-2 px-3.5 w-4/5 sm:w-3/5'>
      <h2 className=''>{name}</h2>
      <p className='text-gray-400'>{model}</p>
    </div>
  )
}
