import React from 'react'
import titleImage from '../../assets/img/png/logo-title-home.png'

import './header.css'
export function Header() {
  return (
    <header className="container-logo-top-home">
      <img
        src={titleImage}
        className="logo-top-home"
        alt="Titulo Star Wars Search"
      />
    </header>
  )
}
