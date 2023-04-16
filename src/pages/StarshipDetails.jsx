import { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StarshipsContext } from '../context/StarshipsContext'

const IMAGES_API_URL = 'https://starwars-visualguide.com/assets/img/starships/'

export default function StarshipDetails() {
  const { starships } = useContext(StarshipsContext)
  const { id } = useParams()
  const starship = starships.find(
    ({ name }) => id === name.toLowerCase().replaceAll(' ', '-')
  )
  const index = starships.indexOf(starship) + 5
  const imageUrl = `${IMAGES_API_URL}${index}.jpg`

  return (
    <div className='font-medium uppercase'>
      {starship && (
        <div className='w-full md:w-fit m-auto bg-zinc-900 rounded-lg overflow-hidden'>
          <img className='m-auto' src={imageUrl} alt='Starship image.' />
          <h2 className='text-3xl py-5 font-bold'>{starship.name}</h2>
          <ul className=' pb-6'>
            {Object.entries(starship).map(([key, value], i) => (
              <Fragment key={i}>
                {key !== 'name' && (
                  <li>
                    {`${key.replaceAll('_', ' ').toUpperCase()}: `}
                    <span className='text-zinc-400'>{value}</span>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
