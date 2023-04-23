import { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StarshipsContext } from '../context/StarshipsContext'
import { NotFound } from './NotFound'

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
      {starship ? (
        <div className='flex flex-wrap bg-[#1c1c1c] rounded-lg overflow-hidden font-medium uppercase my-2'>
          <img
            className='block h-[400px] w-full object-cover'
            src={imageUrl}
            alt='Starship image.'
            onError={handleImageError}
          />
          <div className='px-5 py-6'>
            <h2 className='text-4xl pb-5 font-bold'>{starship.name}</h2>
            <ul className='md:columns-2'>
              {Object.entries(starship).map(([field, value], i) => (
                <Fragment key={i}>
                  {field !== 'name' &&
                    field !== 'films' &&
                    field !== 'pilots' && (
                      <li>
                        {`${field.replaceAll('_', ' ')}: `}
                        <span className='text-zinc-400'>{value}</span>
                      </li>
                    )}
                </Fragment>
              ))}
            </ul>
            <div className='md:columns-2'>
              {starship.films.length > 0 && (
                <div className='flex gap-2 py-2'>
                  Films:
                  <div className='flex gap-3'>
                    {starship.films.map((film, i) => {
                      const [id] = film.match(/[0-9]+/)
                      const imageUrl = `${IMAGES_API_URL}films/${id}.jpg`
                      return (
                        <img
                          key={i}
                          src={imageUrl}
                          alt='Image'
                          className='w-[50px] rounded-sm'
                        />
                      )
                    })}
                  </div>
                </div>
              )}
              {starship.pilots.length > 0 && (
                <div className='flex gap-2 mb-3'>
                  Pilots:
                  <div className='flex gap-3'>
                    {starship.pilots.map((pilot, i) => {
                      const [id] = pilot.match(/[0-9]+/)
                      const imageUrl = `${IMAGES_API_URL}characters/${id}.jpg`
                      return (
                        <img
                          key={i}
                          src={imageUrl}
                          alt='Image'
                          className='w-[50px] rounded-sm'
                        />
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  )
}
