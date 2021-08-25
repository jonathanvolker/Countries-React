import React,{useState} from 'react';
import CountryStyled  from "../styledComponents/CountryStyled"



function Country({name, flag,region,subregion, area, population,ID}) {
  
    
    const [state,setState]=useState(false);
    const changeValidation=()=>{ 
        setState(true)  
      }
      const changeValidationFalse=()=>{ 
        setState(false)  
      }
      
 

    if(state==false){
    return(
        <>
        <CountryStyled>
             
             <img loading="lazy" src={flag} alt="" />
             <div className="details">
                <h2> {name}</h2>
                
                <p> <strong> Continente: {region}</strong> </p> 
                <br/>
                <input onClick={changeValidation}  className="mfInput" type="submit"  value="Mas informacion"/>
                <br/>
                <br/>
                <input className="mfInput" type="submit" value="agregar actividad turistica"/>
             </div>
        </CountryStyled>
    </>
    )}else{
       return (
        <>
        <CountryStyled>
             
             <img loading="lazy" src={flag} alt="" />
             <div className="details">
             <input onClick={changeValidationFalse} className="close" type="submit"  value="cerrar detalle"/>
                <h2> {name}</h2>
                <br/>
                <p> <strong> Continente: {region}</strong> </p> 
                <p> <strong> Subregion: {subregion}</strong> </p> 
                <p> <strong> Poblacion: {population}</strong> </p> 
                <p> <strong> Area: {area}</strong> </p> 
                <p> <strong> id de pais: {ID}</strong> </p> 

                <br/>
                <input className="mfInput" type="submit"  value="agregar actividad turistica"/>

            </div>
        </CountryStyled>
    </>)
    }

}

export default Country;
