import notFound from '../assets/not-found.webp'

export function NotFound() {
  return (
    <div className='text-center'>
      <img src={notFound} alt='Status code 404 image.' />
      <h2 className='text-3xl font-semibold'>
        THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL.
      </h2>
    </div>
  )
}
