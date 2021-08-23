import React,{useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {getCountry} from "../redux/actions"



const navBarStyled=styled.div`

display:grid;
grid-row-gap: 2.3em;
background: var(--background);
justify-content: center;
align-items: center;
//border: 1px solid;

`


function Home(){
    const dispatch=useDispatch();
  
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
    const buscar= (e)=>{
        dispatch(getCountry(datos))
        //console.log(datos)
        e.preventDefault()
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        //console.log('enviando datos...' + datos.nombre)
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
                         <option>Asia</option>
                         <option>Europ</option>
                         <option>Africa</option>
                         <option>Oceania</option>
                         <option>Americas</option>
                         <option>Polar</option>

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