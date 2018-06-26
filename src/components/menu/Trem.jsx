import React, { Component } from 'react'
import locomotivaImg from '../../assets/images/locomotiva.jpg'

const Modal = ({ active, toggle }) => (
  <div>
    <div className={`tremOverlay ${active ? 'tremOverlay--active' : ''}`}></div>
    <div className={`modalContent ${active ? 'modalContent--active' : ''}`}>
      <p>Trem é alguma coisa</p>
      <button onClick={toggle}>Ok, entendi o que é trem</button>
    </div>
  </div>
);

class Trem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  toggleModal = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    return (
      <div className="trem">
        <a className="linkToTrem" href="#" onClick={this.toggleModal}>Descobrir o que é um trem</a>
        {this.props.showTrain && (
          <img src={locomotivaImg} />
        )}
        <Modal active={this.state.active} toggle={this.toggleModal} />
      </div>
    );
  }
}

export default Trem;
