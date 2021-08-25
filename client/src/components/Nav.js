import React,{useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {getCountry} from "../redux/actions"

 
const NavStyled=styled.div`

nav{
    display: flex;
    justify-content: center;
    background-image: url("https://i.ibb.co/cLKQFjK/Map-1000x500-1.jpg");  
    background-repeat: repeat-x;
    
   
}

.form-div{
    display: block;
    font-size: 20px;
    margin-left: 20px;
}
.form-c{
    font-family: 'Courier New', Courier, monospace;
    color:black;
    font-weight: bold;
    font-size: 22px;
}
.countryInput{
    background: white;
    height: 17px;
    border-radius: 6px;
}
.butt{
 font-weight: 50px;
  font-size: 11px;
  color: black;
  background-color: #0FA2DD ;
  border-radius: 6px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
}
.butt:hover{
    color: #0FA2DD ;
    background-color: #ffffff;
}
`
 
function Nav(){
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
        <NavStyled> 
            <nav >
           
           <div className="form-div" >
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
                     <button className="butt" type="submit">Aplicar</button>
                </label>
                <label>
                     <br/>
                    
                     Filtrar actividad:
                     <select name="actividad">
                         <option>Actividad{/** aca iria el mapeo de la 
                           actvidad turistica
                           */} </option>
                     </select>
                     <button className="butt" type="submit"> Aplicar</button>
                </label>
                
            </form>
            </div>
            </nav>
        </NavStyled>
    )
}

export default Nav;
