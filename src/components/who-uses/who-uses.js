import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import facebookLogo from '../../assets/images/icons/facebook.png'
import walmartLogo from '../../assets/images/icons/walmart.png'
import deezerLogo from '../../assets/images/icons/deezer.png'
import spotifyLogo from '../../assets/images/icons/spotify.png'
import atlassianLogo from '../../assets/images/icons/atlassian.png'
import dropboxLogo from '../../assets/images/icons/dropbox.png'
import './who-uses.css'

class WhoUses extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: ''
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        active: 'is-active'
      })
    }, 20)
  }

  render () {
    return (
      <div className={`who-uses ${this.state.active}`}>
        <div className="who-uses-head">
          <div className="container">
            <h2>_QUEM ESTÁ USANDO</h2>
            <p className="who-uses-info">Algumas empresas que utilizam ReactJs</p>
          </div>
        </div>

        <div className="who-uses-content">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="who-uses-box">
                  <img src={facebookLogo} alt="facebookLogo" className="who-uses-box-image"/>
                </div>
              </div>
              <div className="col-4">
                <div className="who-uses-box">
                  <img src={walmartLogo} alt="walmartLogo" className="who-uses-box-image"/>
                </div>
              </div>
              <div className="col-4">
                <div className="who-uses-box">
                  <img src={deezerLogo} alt="deezerLogo" className="who-uses-box-image"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="who-uses-box">
                  <img src={spotifyLogo} alt="spotifyLogo" className="who-uses-box-image"/>
                </div>
              </div>
              <div className="col-4">
                <div className="who-uses-box">
                  <img src={atlassianLogo} alt="atlassianLogo" className="who-uses-box-image"/>
                </div>
              </div>
              <div className="col-4">
                <div className="who-uses-box">
                  <img src={dropboxLogo} alt="dropboxLogo" className="who-uses-box-image"/>
                </div>
              </div>
            </div>
          </div>

          <Link to="/get-to-work">
            <button className="btn-advantages">
              Mãos à obra
            </button>
          </Link>

        </div>
      </div>
    )
  }
}

export default WhoUses
