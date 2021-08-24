import React,{useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {getCountry} from "../redux/actions"



const navBarStyled=styled.div`


.container{
    display: flex;
    justify-content: center;
}
.form-c{
/*     display:grid;
    align-items: center; */
}
.butt{
    text-decoration: none;
    padding: 5px;
    font-weight: 50px;
    font-size: 10px;
    color: black;
    background:#0FA2DD ;
    border-radius: 6px;
    border: 1px solid black;
}
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
           <div className="container">
            <form onSubmit={enviarDatos} className="form-c" >
                <header className="head"> Busque un Pais por su nombre</header>
                <br/>
                <label htmlFor="pais">
                    Pais:
                    <input type="text" 
                           className="countryInput" 
                           name="nombre" 
                           placeholder="ingrese pais..."
                           onChange={handleInputChange}
                           />
                    <button className="butt"
                            value="Buscar"
                            onClick={buscar}> Buscar</button>                   
                </label>
                <label>
                     <br/>
                     <br/>
                     Filtrar continente:
                     <select name="continente">
                         <option>Asia</option>
                         <option>Europ</option>
                         <option>Africa</option>
                         <option>Oceania</option>
                         <option>Americas</option>
                         <option>Polar</option>

                     </select>
                     <input className="butt" type="submit" value="Aplicar"/>
                </label>
                <label>
                     <br/>
                    
                     Filtrar actividad:
                     <select name="actividad">
                         <option>Actividad{/** aca iria el mapeo de la 
                           actvidad turistica
                           */} </option>
                     </select>
                     <input type="submit" value="Aplicar"/>
                </label>
                
            </form>
            </div>
            
        </navBarStyled>
        
    )
}

export default Home;