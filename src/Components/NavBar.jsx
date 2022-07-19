import React from "react";
import './NavBar.css'

import { Link } from 'react-router-dom'

export default () => 
<nav className="nav">
  <div>
    <h1>
      <span className="logo">SITE</span>
    </h1>
  </div>
  <ul className="lista">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>Sobre Nós</Link></li>
    <li><Link to='/login'>Login</Link></li>
  </ul>
</nav>