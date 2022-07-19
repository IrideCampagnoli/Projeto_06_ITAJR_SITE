import React from "react";
import '../layout/CardRegister.css'


export default () => 
  <div className="center">
    <form className="box_register">
        <h1>Registre-se</h1>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="e-mail"></input>
        <input type="password" placeholder="password"/>
      
        <div className="buttons">
          <button className="btn">registrar-se</button>
      </div>
    </form>
  </div>