import { Link } from 'react-router-dom'
import banner from '../assets/banner.webp'

export default function Home() {
  return (
    <div className='text-center'>
      <h1 className='text-lg'>A long time ago in a galaxy far, far away...</h1>
      <p>
        Welcome to the fansite on the Internet devoted to the starships of the
        Star Wars saga.
      </p>
      <div className='my-5 rounded-sm overflow-hidden'>
        <img
          className='w-full h-80 object-cover'
          src={banner}
          alt='Star Wars Episode 1.'
        />
        <p className='text-left mb-2 p-5 bg-[#1c1c1c]'>
          <b>B-Wing Fighter</b> is the oddest-looking starfighter in the Rebel
          Alliance fleet, this ship is as powerful as it is ungainly. The
          structure of the ship is almost entirely taken up by its primary
          airfoil, which houses a cylindrical cockpit on one end, an engine
          cluster in the center, and a heavy weapons pod at its base. Located
          just below the engine cluster are a pair of S-foils which can deploy
          to extend the firing arc of twin laser cannons.
        </p>
      </div>
      <Link
        className='rounded-lg border-2 border-yellow-400 py-1.5 px-5 hover:border-white'
        to='/starships'>
        Go to starships
      </Link>
    </div>
  )
}
