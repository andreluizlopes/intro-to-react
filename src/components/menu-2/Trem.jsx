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

const Trem = () => {

}

export default Trem;
