import React from "react";
import '../layout/CardLogin.css'
import { Link } from 'react-router-dom'



export default () =>{

  return(
    <div className="center">
      <form className="box">
        <h1>Login</h1>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"/>
        
        <div className="buttons">
          <Link className='btn' to='/logfunction'>Logar</Link>
          <Link className="btn" to='/register'>Registre-se</Link>
        </div>
      </form>
    </div>
  )
}