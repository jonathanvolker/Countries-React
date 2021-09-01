import React from 'react';
import InicioStyled from '../styledComponents/InicioStyled'


function Inicio(){
    
    
    return(
        <InicioStyled> 
            <div className="container"> 
                <h1>Henry Countries</h1>
                <a href="http://localhost:3000/home">
                <input className="homebutton" type="button" value="Home"/></a>
            </div> 
                
        </InicioStyled>
    )
}

export default Inicio;

