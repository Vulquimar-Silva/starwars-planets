import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FaUser, FaThermometerHalf } from 'react-icons/fa'
import { PiFilmSlateBold } from 'react-icons/pi'
import { MdGroups2 } from 'react-icons/md'
import { CgTerrain } from 'react-icons/cg'
import { IoChevronBackOutline } from 'react-icons/io5'
import { CiEdit } from 'react-icons/ci'

import { SearchContext } from '../../context/SearchContext'
import './Planet.css'

const planetImages = {
  tatooine: 'https://cryptospro.com.br/planetas/planeta_0000_tatooine.png',
  naboo: 'https://cryptospro.com.br/planetas/planeta_0001_naboo.png',
  mustafar: 'https://cryptospro.com.br/planetas/planeta_0002_mustafar.png',
  kashyyyk: 'https://cryptospro.com.br/planetas/planeta_0003_kashyyyk.png',
  hoth: 'https://cryptospro.com.br/planetas/planeta_0004_hoth.png',
  endor: 'https://cryptospro.com.br/planetas/planeta_0005_endor.png',
  dagobah: 'https://cryptospro.com.br/planetas/planeta_0006_dagobah.png',
  coruscant: 'https://cryptospro.com.br/planetas/planeta_0007_coruscant.png',
  bespin: 'https://cryptospro.com.br/planetas/planeta_0008_bespin.png',
  alderaan: 'https://cryptospro.com.br/planetas/planeta_0009_alderaan.png',
}

export function Planet() {
  const { searchData } = useContext(SearchContext)
  const [residentsNames, setResidentsNames] = useState([])
  const [loadingDetails, setLoadingDetails] = useState(false)
  const [filmsTitles, setFilmsTitles] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editablePlanetName, setEditablePlanetName] = useState(
    searchData.planet.name,
  )
  const navigate = useNavigate()

  useEffect(() => {
    const fetchResidentsAndFilms = async () => {
      if (searchData && searchData.planet) {
        const residentsPromises = searchData.planet.residents.map((url) =>
          axios.get(url),
        )
        const filmsPromises = searchData.planet.films.map((url) =>
          axios.get(url),
        )
        setLoadingDetails(true)
        try {
          const residentsResponses = await Promise.all(residentsPromises)
          const filmsResponses = await Promise.all(filmsPromises)

          setLoadingDetails(false)
          setResidentsNames(residentsResponses.map((res) => res.data.name))
          setFilmsTitles(filmsResponses.map((res) => res.data.title))
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
    }

    setEditablePlanetName(searchData.planet.name)
    fetchResidentsAndFilms()
  }, [searchData, searchData.planet])

  if (!searchData || !searchData.planet) {
    return <div className="planet-info">Não há dados disponíveis</div>
  }

  const handleEditName = () => {
    setIsEditing(true)
  }

  const handleSaveName = () => {
    setIsEditing(false)
  }

  const handleChangeName = (e) => {
    setEditablePlanetName(e.target.value)
  }

  const planet = searchData.planet
  const imageUrl =
    planetImages[planet.name.toLowerCase()] ||
    'https://cryptospro.com.br/planetas/planeta_0000_tatooine.png'

  return (
    <div className="planet-page-container">
      <div className="planet-card">
        <div className="planet-section-header">
          <div className="planet-detail-header">
            <img
              src={imageUrl}
              alt={`Planet ${planet.name}`}
              className="planet-image"
            />

            <div className="planet-detail-name">
              <span className="title-planet">Planet:</span>
              {isEditing ? (
                <input
                  type="text"
                  className="edit-planet-name-input"
                  value={editablePlanetName}
                  onChange={handleChangeName}
                  onBlur={handleSaveName}
                  autoFocus
                />
              ) : (
                <h1 className="title-detail" onClick={handleEditName}>
                  {editablePlanetName}
                  <CiEdit className="edit-icon" />
                </h1>
              )}
            </div>
          </div>
          <div className="planet-details-section">
            <p className="planet-climate-detail">
              <FaThermometerHalf />
              <span className="name-climate">
                <strong>Climate:</strong> {planet.climate}
              </span>
            </p>
            <p className="planet-terrain-detail">
              <CgTerrain />
              <span className="name-terrain">
                <strong>Terrain:</strong> {planet.terrain}
              </span>
            </p>
            <p className="planet-population-detail">
              <MdGroups2 className="icon-population" />
              <span className="name-population">
                <strong>Population:</strong> {planet.population}
              </span>
            </p>
          </div>
        </div>
        <div className="box-residents">
          <h2>
            <FaUser className="icon-residents" />
            Residents:
          </h2>
          <div className="horizontal-line"></div>
          {loadingDetails && (
            <p className="loading-details-planet">
              Carregando Residents, aguarde...
            </p>
          )}
          <p>{residentsNames.join(', ')}</p>
        </div>
        <div className="box-films">
          <h2>
            <PiFilmSlateBold className="icon-films" />
            Films ({planet.films.length}):
          </h2>
          <div className="horizontal-line"></div>
          {loadingDetails && (
            <p className="loading-details-planet">
              Carregando Films, aguarde...
            </p>
          )}
          <p>{filmsTitles.join(', ')}</p>
        </div>
      </div>

      <div className="container-back-button">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoChevronBackOutline className="back-icon" />
          Voltar
        </button>
      </div>
    </div>
  )
}
