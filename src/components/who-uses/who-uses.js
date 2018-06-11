import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './who-uses.css'

class WhoUses extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: ''
    }
  }

  componentDidMount () {
    const timerid = setTimeout(() => {
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
              <div className="col-3">
                <div className="who-uses-box airbnb"></div>
              </div>
              <div className="col-3">
                <div className="who-uses-box yahoo"></div>
              </div>
              <div className="col-3">
                <div className="who-uses-box facebook"></div>
              </div>
              <div className="col-3">
                <div className="who-uses-box instagram"></div>
              </div>
              <div className="col-3">
                <div className="who-uses-box netflix"></div>
              </div>     <div className="col-3">
                <div className="who-uses-box newyorktime"></div>
              </div>
              <div className="col-3">
                <div className="who-uses-box codecademy"></div>
              </div>
              <div className="col-3">
                <div className="who-uses-box dropbox"></div>
              </div>
            </div>
          </div>

          <Link to="/advantages">
            <button className="btn-advantages">
              Vantagens
            </button>
          </Link>

        </div>
      </div>
    )
  }
}

export default WhoUses
