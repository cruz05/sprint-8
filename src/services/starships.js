const API_URL = 'https://swapi.dev/api/starships/'

export const getStarships = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}`)
    const json = await response.json()
    const { results } = json

    const starships = results.map(ship => ({
      name: ship.name,
      model: ship.model,
      starship_class: ship.starship_class,
      manufacturer: ship.manufacturer,
      cost: `${ship.cost_in_credits} credits`,
      crew: ship.crew,
      passenger_capacity: ship.passengers,
      cargo_capacity: `${ship.cargo_capacity} tons`,
      consumables: ship.consumables,
      length: `${ship.length} meters`,
      maximum_atmosphering_speed: `${ship.max_atmosphering_speed} km/h`,
      hyperdrive_rating: ship.hyperdrive_rating,
      maximum_speed_in_realspace: `${ship.MGLT} mglt`,
      pilots: ship.pilots,
      films: ship.films
    }))
    return starships
  } catch (e) {
    console.error('Error fetching starships')
  }
}
