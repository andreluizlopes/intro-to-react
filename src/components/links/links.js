import React from 'react'
import { Link } from 'react-router-dom';

import './links.css'


const Links = () => (
  <div className="links">
    <div className="container">
      <h2>Fontes</h2>
      <ul>
        <li><a href="https://reactjs.org/" target="_blank">https://reactjs.org/</a></li>
        <li><a href="https://brainhub.eu/blog/10-famous-apps-using-reactjs-nowadays/" target="_blank">https://brainhub.eu/blog/10-famous-apps-using-reactjs-nowadays/</a></li>
        <li><a href="http://www.npmtrends.com/angular-vs-react-vs-vue" target="_blank">http://www.npmtrends.com/angular-vs-react-vs-vue</a></li>
        <li><a href="https://www.udemy.com/react-redux-pt/" target="_blank">https://www.udemy.com/react-redux-pt/</a></li>
        <li><a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank">https://reactjs.org/docs/create-a-new-react-app.html</a></li>
      </ul>
      
      <Link to="/the-end">
        <button className="btn">
          Fim
        </button>
      </Link>

    </div>
  </div>
)

export default Links
