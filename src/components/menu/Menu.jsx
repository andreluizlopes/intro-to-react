import React, { Component } from 'react'

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: false,
    };
  }

  menuToggle = () => {
    this.setState({
      menuActive: !this.state.menuActive,
    });
  }

  render() {
    return (
      <div className="menu">
        <button className="menuBt" onClick={this.menuToggle}>
          <span className="menuBtHamburger" />
          <span className="menuBtHamburger" />
          <span className="menuBtHamburger" />
        </button>

        <ul className={`menuContent ${this.state.menuActive ? 'menuContent--active' : ''}`}>
          <li>Home</li>
          <li>Contato</li>
          <li>Quem Somos</li>
        </ul>
      </div>
    );
  }
}

export default Menu;


// //Exemplo de abrir menu com jQuery
// jQuery('.menu .menuBt').on('click', function() {
//   jQuery('.menu .menuContent').toggleClass('menuContent--active');
// });
