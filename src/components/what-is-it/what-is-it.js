import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './what-is-it.css'

class WhatIsIt extends Component {
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
      <div className="what-is-it">
        <div className="what-is-it-content">
          <p className="what-is-it-title">_Principais características</p>
          <ul className="what-is-it-list">
             <li>✓ Baseado em componentes</li>
             <li>✓ Reaproveitamento</li>
             <li>✓ Virtual-DOM</li>
             <li>✓ JSX</li>
           </ul>

        </div>
        <div className={`what-is-it-bg ${this.state.active}`}>
          <div className="what-is-it-bg-content">
            <h2>O QUE
              <br/>É REACT?
            </h2>
            <Link to="/who-uses">
              <button className="btn-who-uses">quem está usando</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default WhatIsIt
