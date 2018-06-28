import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import Home from './components/home'
import Cover from './components/cover/cover'
import WhatIsIt from './components/what-is-it/what-is-it'
import WhoUses from './components/who-uses/who-uses'
import Advantages from './components/advantages'
import GetToWork from './components/get-to-work/get-to-work'
import Form from './components/form/form'
import Menu from './components/menu/example'
import Menu2 from './components/menu-2/example'
import WhereAmI from './components/validation/WhereAmI'
import Template from './components/template/example'
import Links from './components/links/links'
import End from './components/end/end'
import './assets/css/main.css'

class App extends Component {
  render() {
    return (
      <div className="App">

        <main>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Cover} />
          <Route exact path="/what-is-it" component={WhatIsIt} />
          <Route exact path="/who-uses" component={WhoUses} />
          <Route exact path="/advantages" component={Advantages} />
          <Route exact path="/get-to-work" component={GetToWork} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu-2" component={Menu2} />
          <Route exact path="/validation" component={WhereAmI} />
          <Route exact path="/template" component={Template} />
          <Route exact path="/links" component={Links} />
          <Route exact path="/the-end" component={End} />
        </main>

      </div>
    );
  }
}

export default withRouter(App);
