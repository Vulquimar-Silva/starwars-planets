import React from 'react'
import footerLogo from '../../assets/img/png/logo-footer.png'
import './footer.css'
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <p className="footer-text">
            STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
            reservados
          </p>
        </div>
        <span className="pipe-footer"></span>
        <div>
          <img src={footerLogo} alt="Logo Star Wars" className="footer-logo" />
        </div>
      </footer>
    </>
  )
}
