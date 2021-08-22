import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux';
import {getCountry} from "../redux/actions"
import * as ActionsCreators from "../redux/actions"


const navBarStyled=styled.div`

/* border: 1px solid black;
align-items: center;
display:grid;
grid-row-gap: 2.3em;
background: var(--background);
justify-content: center;
border: 1px solid red;
padding:4em 2em;
background-color: linear-gradient(to bottom, blue 50%, lightblue 75%); */

 
 .form{
     border: 1px solid black
 }
 .input {
     width: 100%; 
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: .7em;
    outline: 0;
    color: var(--black);
    background: var(--white);
    &::-webkit-input-placeholder {
      color: #C4C4C4;
    }
  }
  .header{
      align-items: center;
  }

`


function Home(){
    const dispatch=useDispatch();
    const data= useSelector((state)=>state.CountryDetail)
    
    const [datos, setDatos] = useState({
        nombre: ''
    })


    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const buscar= ()=>{
        dispatch(getCountry(datos))
        console.log(datos)
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre)
    }
    return(
        <navBarStyled> 
            
            <form onSubmit={enviarDatos} >
                <header> Busque un Pais por su nombre</header>
                <br/>
                <label htmlFor="pais">
                    Pais:
                    <input type="text" 
                           className="countryInput" 
                           name="nombre" 
                           placeholder="ingrese pais..."
                           onChange={handleInputChange}
                           />
                    <button   
                            value="Buscar"
                            onClick={buscar}> Buscar</button>                   
                </label>
                <label>
                     <br/>
                     <br/>
                     Filtar continente:
                     <select name="continente">
                         <option>America</option>
                         <option>Europa</option>
                         <option>Asia</option>
                         <option>Oceania</option>
                     </select>
                     <input type="submit" value="Aplicar"/>
                </label>
                <label>
                     <br/>
                    
                     Filtar actividad:
                     <select name="actividad">
                         <option>Actividad{/** aca iria el mapeo de la 
                           actvidad turistica
                           */} </option>
                     </select>
                     <input type="submit" value="Aplicar"/>
                </label>
                
            </form>
           
            
        </navBarStyled>
    )
}

export default Home;