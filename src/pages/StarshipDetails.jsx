import { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StarshipsContext } from '../context/StarshipsContext'
import { NotFound } from './NotFound'
import { ImageList } from '../components/ImagesList'
import { formatWithHyphens, formatWithSpaces } from '../utils/utils'

const IMAGES_API_URL = 'https://starwars-visualguide.com/assets/img/'

export default function StarshipDetails() {
  const { starships } = useContext(StarshipsContext)
  const { id } = useParams()

  const starship = starships.find(({ name }) => id === formatWithHyphens(name))

  const index = starships.indexOf(starship) + 5
  const shipImageUrl = `${IMAGES_API_URL}starships/${index}.jpg`

  const handleImageError = e => {
    e.currentTarget.src = `${IMAGES_API_URL}big-placeholder.jpg`
  }

  return (
    <>
      {starship ? (
        <div className='flex flex-wrap bg-[#1c1c1c] rounded-lg overflow-hidden font-medium uppercase my-2'>
          <img
            className='block h-[400px] w-full object-cover'
            src={shipImageUrl}
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
                        {`${formatWithSpaces(field)}: `}
                        <span className='text-zinc-400'>{value}</span>
                      </li>
                    )}
                </Fragment>
              ))}
            </ul>
            <div className='md:columns-2'>
              {starship.films.length > 0 && (
                <ImageList data={starship.films} type='Films' />
              )}
              {starship.pilots.length > 0 && (
                <ImageList data={starship.pilots} type='Pilots' />
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
