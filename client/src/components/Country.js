import React,{useState} from 'react';

import styled from "styled-components";


const CountryStyled =styled.div`
/* width:264px;
text-align:left;
border-radius:5px;
overflow: hidden;
box-shadow:0 0 7px 2px rgba(0,0,0,.03);
 */
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.802);
    background: linear-gradient(120deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    font-style: oblique;
    margin-top: 5%;
    box-shadow: 3px 3px #0A055A, -1em 0 0.4em rgba(5, 9, 121,1);
    margin-left: 50px;
    margin-bottom: 10px;
    border-radius: 15px;
    
img{
    margin-top: 5px;
    margin-right: 1px;
    width:100%;
    height:160px;
    object-fit:cover;
    border-radius:10px
}
.details{
    padding:1.5em;
    color:white;
}
.mfInput{
  text-decoration: none;
  
  font-weight: 50px;
  font-size: 11px;
  color: black;
  background-color: #0FA2DD ;
  border-radius: 6px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
}
.mfInput:hover{
    color: #0FA2DD ;
    background-color: #ffffff;
}
.close{
  text-decoration: none;
  height: 100%;
 
  font-weight: 50px;
  font-size: 11px;
  color: black;
  background-color: #0FA2DD ;
  border-radius: 6px;
  border: 1px solid black;
  margin-left:130px;
  transition-duration: 0.3s;
}
.close:hover{
    color: #0FA2DD ;
    background-color: #ffffff;
}

h2{
    margin:0;
    margin-bottom: 1rem;
    font-size: 20px;
    }
p{
    font-size: 1em;
    margin-bottom:.5rem
}

`;



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
                <input className="mfInput" type="submit"  value="agregar actividad turistica"/>
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
