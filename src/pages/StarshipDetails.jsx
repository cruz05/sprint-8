import { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StarshipsContext } from '../context/StarshipsContext'

const IMAGES_API_URL = 'https://starwars-visualguide.com/assets/img/'

export default function StarshipDetails() {
  const { starships } = useContext(StarshipsContext)
  const { id } = useParams()
  const starship = starships.find(
    ({ name }) => id === name.toLowerCase().replaceAll(' ', '-')
  )
  const index = starships.indexOf(starship) + 5
  const imageUrl = `${IMAGES_API_URL}starships/${index}.jpg`

  const handleImageError = e => {
    e.currentTarget.src = `${IMAGES_API_URL}big-placeholder.jpg`
  }

  return (
    <>
      {starship && (
        <div className='flex flex-wrap bg-zinc-900 rounded-lg overflow-hidden font-medium uppercase my-2'>
          <img
            className='block h-[400px] w-full object-cover'
            src={imageUrl}
            alt='Starship image.'
            onError={handleImageError}
          />
          <div className='px-5 py-2'>
            <h2 className='text-4xl py-5 font-bold'>{starship.name}</h2>
            <ul className='pb-6 md:columns-2'>
              {Object.entries(starship).map(([key, value], i) => (
                <Fragment key={i}>
                  {key !== 'name' && (
                    <li>
                      {`${key.replaceAll('_', ' ')}: `}
                      <span className='text-zinc-400'>{value}</span>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
