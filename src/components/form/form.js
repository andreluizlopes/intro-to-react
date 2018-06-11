import React, { Component } from 'react'
import './form.css'

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      showResult: ''
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  componentDidMount () {
    console.log('montou??')
  }

  handleChangeEmail(event) {
    console.log(event.target.value)
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      showResult: 'is-active'
    })
  }

  renderForm () {
    return (
      <form action="" className="form-main" onSubmit={this.handleSubmit}>
        <h3 className="form-title">Digite seu nome e email</h3>
        <div className="input-group">
          <input type="text" value={this.state.name} placeholder="Nome" onChange={this.handleChangeName}/>
        </div>
        <div className="input-group">
          <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleChangeEmail}/>
        </div>
        <div className="input-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    )
  }

  renderResult () {
    return (
      <div className={`form-result ${this.state.showResult}`}>
        <p className="form-result-input">Nome: {this.state.name}</p>
        <p className="form-result-input">Email: {this.state.email}</p>
      </div>
    )
  }

  render () {
    return (
      <div className="form">
        <div className="form-bg">
          <div className="row">
            <div className="col-12">
              {this.renderResult()}
            </div>
          </div>
        </div>
        <div className="form-content">
          <div className="row">
            <div className="col-12">
              {this.renderForm()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form