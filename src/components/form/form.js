import React, { Component } from 'react'

class Form extends Component {
  render () {
    return (
      <div className="form">
        <form action="">
          <input type="text" value="" placeholder="Seu Nome"/>
          <button type="submit">Salvar</button>
        </form>
      </div>
    )
  }
}

export default Form