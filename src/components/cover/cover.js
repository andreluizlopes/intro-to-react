import React from 'react'
import { Link } from 'react-router-dom';
import './cover.css'
import logo from '../../logo.svg'
import iconQuestion from '../../assets/images/icons/cover/icon-question.svg'
import iconUser from '../../assets/images/icons/cover/icon-user.svg'
import iconAdvantage from '../../assets/images/icons/cover/icon-vantagem.svg'
import iconGetToWork from '../../assets/images/icons/cover/icon-maos-a-obra.svg'

export default () => (
  <div className="cover">
    <div className="cover-content container">
      <img src={logo} className="cover-logo" alt="logo" />
      <h1>React</h1>
      <p className="about">Uma biblioteca JavaScript para construir interfaces</p>
      
      <div className="row cover-links">
        <div className="col-4">
          <div className="cover-next">
            <Link className="cover-link" to="/what-is-it">
              <img src={iconQuestion} alt="iconQuestion" className="cover-link-icon"/>
              <p className="cover-link-title">Entendendo o React</p>
              <p className="cover-link-text">Caracteristicas principais</p>
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="cover-next">
            <Link className="cover-link" to="/who-uses">
              <img src={iconUser} alt="iconUser" className="cover-link-icon"/>
              <p className="cover-link-title">QUEM ESTÁ USANDO</p>
              <p className="cover-link-text">Algumas empresas que utilizam ReactJs</p>
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="cover-next">
            <Link className="cover-link" to="/get-to-work">
              <img src={iconGetToWork} alt="iconGetToWork" className="cover-link-icon"/>
              <p className="cover-link-title">MÃOS À OBRA</p>
              <p className="cover-link-text">Vamos ver na prática</p>
            </Link>
          </div>
        </div>
      </div>
    </div>

  </div>
)
