import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Views/About";
import Home from "../Views/Home";
import Login from "../Views/Login";
import Register from "../Views/Register";
import LogarFunction from "./LogarFunction";

export default () => 
  <div className="center">
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/logfunction' element={<LogarFunction/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </div>