import React from 'react';
import InicioStyled from '../styledComponents/InicioStyled'


function Inicio(){
    
    
    return(
        <InicioStyled> 
            <div className="container"> 
                <h1 className="tittle" >CountriesApp</h1>
                <a href="http://localhost:3000/home">
                <button className="homebutton" type="button" >Comenzemos</button></a>
            </div> 
                
        </InicioStyled>
    )
}

export default Inicio;

