const IMAGES_API_URL = 'https://starwars-visualguide.com/assets/img/'

export function ImageList({ data, type }) {
  return (
    <div className='flex gap-2 mb-3'>
      <span>{type}:</span>
      {data.map((item, i) => {
        const [id] = item.match(/[0-9]+/)
        const folder = type === 'Pilots' ? 'characters' : 'films'
        const imageUrl = `${IMAGES_API_URL}${folder}/${id}.jpg`

        return (
          <img
            key={i}
            src={imageUrl}
            alt='Retrieved image from Star wars API.'
            className='w-[50px] rounded-sm'
          />
        )
      })}
    </div>
  )
}
