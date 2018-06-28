import React from 'react'
import Menu from './Menu'
import Trem from './Trem'
import './example.css'

const Example = () => (
  <div className="example">
    <Menu />
    <Trem showTrain />
  </div>
)

export default Example

/*
  1: Mostrar que funciona o modal e menu
  2: Começar o arquivo do trem como stateless
  3: Explicar a diferença do steteless pro statefull
  4: Quando usar o statefull
  5: Mostrar a prop showTrain e fazer ela ativar e desativar a exibição da imagem
  6: Tranformar Trem em statefull
  7: Explicar porque vamos usar state para esse componente
  8: Exemplificar como faríamos com jQuery
  9: Explicar porque Modal é stateless
*/
