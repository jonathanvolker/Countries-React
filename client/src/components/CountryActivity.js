import React,{useState} from 'react';
import CountryStyled  from "../styledComponents/CountryStyled"



function CountryActivity({dificultad,duracion,temporada,countryName,name, flag}) {
  
    
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
                <h2> {countryName}</h2>
                <br/>
                <input onClick={changeValidation}  className="mfInput" type="submit"  value="Mas informacion"/>
                <br/>
                <br/>
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
                <h2> {countryName}</h2>
               
            
                <h3> <strong> Actividades a realizar :</strong> </h3> 
                <p> <strong> Actividad: {name}</strong> </p> 
                <p> <strong> Dificultad: {dificultad}</strong> </p> 
                <p> <strong> Duracion: {duracion}</strong> </p> 
                <p> <strong> Temporada: {temporada}</strong> </p> 

                <br/>
                

            </div>
        </CountryStyled>
    </>)
    }

}

export default CountryActivity;