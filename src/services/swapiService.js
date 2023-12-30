import axios from './axiosConfig'

const BASE_URL = import.meta.env.VITE_URL_API

export const fetchPlanets = async () => {
  const response = await axios.get(`${BASE_URL}/planets/`)
  return response.data.results
}

export const filterPlanets = (planets, nameQuery, populationQuery) => {
  if (!populationQuery) {
    return planets.filter((planet) =>
      planet.name.toLowerCase().includes(nameQuery.toLowerCase()),
    )
  }

  const populationQueryNumber = parseInt(populationQuery, 10)
  let closestPlanet = null
  let smallestDifference = Infinity

  planets.forEach((planet) => {
    if (planet.population !== 'unknown') {
      const planetPopulation = parseInt(planet.population, 10)
      const difference = Math.abs(planetPopulation - populationQueryNumber)

      if (
        difference < smallestDifference &&
        planet.name.toLowerCase().includes(nameQuery.toLowerCase())
      ) {
        smallestDifference = difference
        closestPlanet = planet
      }
    }
  })

  return closestPlanet ? [closestPlanet] : []
}
