import React from 'react';
import InicioStyled from '../styledComponents/InicioStyled'
const logo =require('../img/paisesLogo.jpg')

function Inicio(){
    
    
    return(
        <InicioStyled> 
                <h1>Henry Countries</h1>
                <a href="http://localhost:3000/home">
                <input className="homebutton" type="button" value="Home"/></a>
                <br/>
                <a><img className="world" src="https://i.pinimg.com/564x/7d/73/e3/7d73e325ca9bb568cad227467dc8b2d4.jpg" alt="banderas" border="0"/></a>
                <br/>
                
        </InicioStyled>
    )
}

export default Inicio;

