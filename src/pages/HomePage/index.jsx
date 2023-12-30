import React, { useRef, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { VscSettings } from 'react-icons/vsc'
import { BsChevronDown } from 'react-icons/bs'
import imageHomePlanet from '../../assets/img/png/planetOrange.png'
import imageHomeNave from '../../assets/img/png/nave-spaceship.png'
import { fetchPlanets } from '../../services/swapiService'
import { SearchContext } from '../../context/SearchContext'

import './Home.css'

export function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [touched, setTouched] = useState(false)

  const { setSearchData } = useContext(SearchContext)
  const navigate = useNavigate()
  const scrollRef = useRef(null)

  const isRefScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSearchClick = async () => {
    setTouched(true)
    if (!searchTerm.trim()) {
      // setError('Digite o nome de um planeta ou população');
      return
    }

    setLoading(true)
    setError(null)

    try {
      const planetsData = await fetchPlanets()
      let searchedPlanet

      if (isNaN(searchTerm)) {
        // Aqui ocorre a pesquisa por nome
        searchedPlanet = planetsData.find(
          (planet) => planet.name.toLowerCase() === searchTerm.toLowerCase(),
        )
      } else {
        // Aqui ocorre a pesquisa por população
        const searchTermNumber = parseInt(searchTerm, 10)
        searchedPlanet = planetsData.reduce((closest, planet) => {
          if (planet.population !== 'unknown') {
            const planetPopulation = parseInt(planet.population, 10)
            const closestPopulation =
              closest && closest.population !== 'unknown'
                ? parseInt(closest.population, 10)
                : null
            if (
              closestPopulation === null ||
              Math.abs(planetPopulation - searchTermNumber) <
                Math.abs(closestPopulation - searchTermNumber)
            ) {
              return planet
            }
          }
          return closest
        }, null)
      }

      if (!searchedPlanet) {
        setError('Esse planeta não foi encontrado')
        setLoading(false)
        return
      }

      setSearchData({ planet: searchedPlanet })
      navigate('/planet')
    } catch (e) {
      setError('Ocorreu um erro ao buscar os dados')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container-home">
      <main className="box-center-home">
        <section className="planet-section">
          <img
            src={imageHomePlanet}
            alt="Planet"
            className="image-planet-home"
          />

          <img
            src={imageHomeNave}
            alt="Nave Spaceship"
            className="nave-image"
          />
        </section>

        <section className="search-box-section">
          <header>
            <h1 className="text-box-search">
              Discover all the information about Planets of the Star Wars Saga
            </h1>
          </header>
          <div className="input-group">
            <input
              className="search-input"
              type="text"
              required
              placeholder="Enter the name of the planet"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                if (e.target.value.trim()) {
                  isRefScroll()
                }
              }}
              style={{
                width: '100%',
                padding: '14px 14px',
                backgroundColor: 'white',
                borderRadius: '4px',
                border:
                  touched && !searchTerm.trim()
                    ? '1px solid red'
                    : '1px solid transparent',
              }}
            />
            {touched && !searchTerm.trim() && (
              <div
                style={{
                  color: 'red',
                  marginTop: '3px',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}
              >
                Digite o nome do planeta
              </div>
            )}
            <button className="search-button" onClick={handleSearchClick}>
              <IoSearch />
              <span>Search</span>
            </button>
            <div className="container-text-filter">
              <span className="text-filter">
                <VscSettings className="rotated-icon padding-text" />
                Filter:
              </span>
              <span className="text-filter">
                <BsChevronDown className="padding-text" />
                Name
              </span>
              <span className="text-filter">
                <BsChevronDown className="padding-text" />
                Population
              </span>
            </div>
          </div>
          <span ref={scrollRef}></span>
          {loading && (
            <p className="loading">
              {isNaN(searchTerm)
                ? 'Pesquisando planeta, aguarde...'
                : 'Buscando o planeta mais próximo em população...'}
            </p>
          )}
          {error && <p className="error-message">{error}</p>}
        </section>
      </main>
    </div>
  )
}
