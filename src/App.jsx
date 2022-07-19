import React from "react";
import NavBar from './Components/NavBar'
import Content from './Components/Content'
import Footer from "./layout/Footer";
import { BrowserRouter } from  'react-router-dom'

export default () => 
  <div className="App">
    <BrowserRouter>
      <NavBar/>
        <div className="center">
          <Content/>
        </div>
      <Footer/>
    </BrowserRouter>
  </div>