import React from 'react';
import InicioStyled from '../styledComponents/InicioStyled'

function Inicio(){
    
    
    return(
        <InicioStyled> 
                <h1>Henry Countries</h1>
                <a href="http://localhost:3000/home">
                <input className="homebutton" type="button" value="Home"/></a>
                <br/>
                <a href="https://imgbb.com/"><img src="https://i.ibb.co/3hmB1t1/banderas.gif" alt="banderas" border="0"/></a>
                <br/>
                
        </InicioStyled>
    )
}

export default Inicio;

