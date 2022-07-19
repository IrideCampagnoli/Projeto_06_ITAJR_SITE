import React, { useEffect, useState } from "react";
import '../layout/Card.css'
import  './About.css'


function hacker(count) {
  const future = Date.now() + 0.002
  while(Date.now() < future){
    count++
  }
  return count
}


export default () => {
  const [count, setCount] = useState(147)

  useEffect(function(){
    setTimeout(() => {
      setCount(count + 1)
    }, 2000)
  },[count])



  return(
    <div className="center">
      <div className="containner">
        <h1>Nós já Somos:</h1>
        <div className="hackers">{`${count} Hackers`}</div>
        <br />
        <br />
        <br />
        <div>
          <h2><br /> Somos uma empresas que capacita as pessoas para que se tornem Ciber Seguranças e possam trabalhar em empresas que necessitem. Além de oferecermos treinamento e profissionalização, com professores exclusivos da área, ainda oferecemos um BONUS de programação em blockchain.</h2>
          <h3>Venha fazer parte você também</h3>
        </div>
      </div>
    </div>
  )
}