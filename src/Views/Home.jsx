import React, { useState, useEffect, useMemo } from "react";
import '../layout/Card.css'
import './Home.css'

export default () => {
  
  const [count, setCount] = useState(0)

  

  return(
    <div className="center">
      <div className="containner">
        <h1>Somos uma empresa de capacitação de Hackers</h1>
        <br />
        <p>
          clique no botao abaixo para ver quanto um hacker ganha atualmente no mercado:
        </p>
        <button className="btn2" onClick={()=> setCount( 7478.98) }>SALÁRIO</button>
        <div className="salario">
          <h1>{`R$: ${count}`}</h1>
        </div>
      </div>
    </div>
  )
} 