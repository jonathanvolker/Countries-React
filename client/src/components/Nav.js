import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';
import {getCountries,getCountry, continentState} from "../redux/actions"
import CountryList from './CountryList'
//import Country from "./Country"
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
const [navState,setNavState]=useState(true) 
const [continent,setContinent]=useState("")
const [activity,setActivity]=useState("")
//const [activity,setActivity]=useState( {value : ""})
const [input,setInput] =useState({pais:""})


useEffect(()=>{
    dispatch(getCountries())

},[])

const all=async()=>{
    setNavState(false)
}

const selectContinent=(e)=>{ //fijo continente en el estado desde el select
    setContinent(e.target.value)
}

const selectActivity=(e)=>{ //fijo actividad en el estado desde el select
    setActivity(e.target.value)
}

const handleInputCountry= (e)=> {
    setInput({ ...input, [e.target.name]: e.target.value
});}

const handleSubmit= (e)=> {
    e.preventDefault();
 }

const handelCountry= ()=> {
    dispatch(getCountry(input.pais))
}

const takeContinent=()=>{
    dispatch(continentState(continent))

}
const takeActivity=()=>{

}

const back=()=>{
    window.location.replace("http://localhost:3000/home")
     setInput({pais:""})
}
/* const redirect=()=>{
    setTimeout(()=>{window.location.replace("http://localhost:3000/home")}, 1500)
} */
 
if(navState){// solo la nav
    return(
        <>
        
        <NavStyled> 
        <nav >
           
           <div className="form-div"onSubmit={handleSubmit} >
            <form className="form-c"  >
                <header className="head"> Busque un Pais por su nombre</header>
                <br/>
                <label htmlFor="pais">
                    Pais:
                    <input type="text" 
                           className="countryInput" 
                           name="pais" 
                           placeholder="ingrese pais..."
                           value={input.pais}
                           onChange={handleInputCountry}
                           />
                    <button className="butt" type="submit" value="Submit" onClick={handelCountry} >buscar</button>
                  
                </label>
               <br/>            
                        Filtrar continente:
                        <select name="continente" value={continent.value} onChange={selectContinent}>
                            <option defaultValue="selected"></option>
                            <option value="Asia">Asia</option>
                            <option value="Europe" >Europe</option>
                            <option value="Africa" >Africa</option>
                            <option value="Oceania" >Oceania</option>
                            <option value="Americas" >Americas</option>
                            <option value="Polar" >Polar</option>

                        </select>
                        <button className="butt" type="button" value="Enviar" onClick={takeContinent} >Aplicar</button> 
                <label>
                        <br/>
                        Filtrar actividad:
                        <select name="actividad" value={activity.value} onChange={selectActivity} >
                            <option value="actividad">{} </option>
                        </select>
                        <button className="butt"type="button" value="Enviar" onClick={takeActivity} >Aplicar</button> 
                        <br/>
                        <a className="butt" href="http://localhost:3000/activity">agregar una actividad turistica</a>
                </label>
                        <br/>
                        <br/>
                        <br/>
                        <button className="butt" onClick={all} >Mostrar</button>
             </form>
            </div>
         </nav>
        
        </NavStyled>
        
        </>
        )
}
if(!navState){
    return(
        <>
      
         <button className="butt" onClick={back} >volver</button>
         <CountryList/>
        </>
    )
}





}

export default Nav;
