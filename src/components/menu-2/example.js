import React from 'react'
import Menu from './Menu'
import Trem from './Trem'
import './example.css'

const Example = () => (
  <div className="example">
    <Menu />
    <Trem showTrain={false} />
  </div>
)

export default Example
