import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';
import {getCountry,getCountriesPerContinent} from "../redux/actions"
import CountryList from './CountryList'
import Country from "./Country"
 
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
    
const [state1,setState1]=useState(true)
const [state2,setState2]=useState(true)
const[state3,setState3]=useState(true)
const [continent,setContinent]=useState({value:""})
const[navState,setNavState]=useState(true)

const all=async()=>{
    setNavState(false)
    setState1(false)
}

const [input,setInput] =useState({
    pais:""
})

const selectContinent=(e)=>{
    setContinent(e.target.value)
}

const takeContinent=()=>{
    dispatch(getCountriesPerContinent(continent))
    setState3(false)
    setNavState(false)
}

const handleInputCountry= (e)=> {
    setInput({ ...input, [e.target.name]: e.target.value
});
    }

    
const handleSubmit= (e)=> {
    e.preventDefault();
 }

 const dispatch=useDispatch();
var findCountry= useSelector((state)=>state.Country)
var findContinent=useSelector((state)=>state.CountryContinent)

const oneCountry= ()=>{
dispatch(getCountry(input.pais))
setState2(false)
setNavState(false)
}     
const back=()=>{
    setNavState(true)
    setState2(true)
    
    setInput({pais:""})
}
 
    if(navState){
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
                    <button className="butt" type="submit" value="Submit" onClick={oneCountry} >buscar</button>
                  
                </label>
               <br/>
                                       Filtrar continente:
                  
                        <select name="continente" value={continent.value} onChange={selectContinent}>
                            <option defaultValue="selected"></option>
                            <option value="Asia">Asia</option>
                            <option value="Europ" >Europ</option>
                            <option value="Africa" >Africa</option>
                            <option value="Oceania" >Oceania</option>
                            <option value="Americas" >Americas</option>
                            <option value="Polar" >Polar</option>

                        </select>
                        <button className="butt"type="button" value="Enviar" onClick={takeContinent} >Aplicar</button>
                    

                     

                
                <label>
                     <br/>
                    
                     Filtrar actividad:
                     <select name="actividad">
                         <option>Actividad{/** aca iria el mapeo de la 
                           actvidad turistica
                           */} </option>
                     </select>
                     <button className="butt" type="submit"> Aplicar</button>
                     <br/>
                      <a className="butt" href="http://localhost:3000/activity">agregar una actividad turistica</a>
                </label>
                <br/>
                <br/>
                <br/>
               <button className="butt" onClick={all} >Mostrar todos los paises</button>
            </form>
            </div>
            </nav>
            
        </NavStyled>
        
        </>
        )
}
if(!navState & !state2){
  return(
        <>
           {
         findCountry.map(({ subregion,name, flag,continent, area, population,ID }) => {
           return (
              <div key={name} className="country">
                  <button onClick={back}>Volver</button>
                  
                  <Country
                    key={name}
                    flag={flag}
                    name={name}
                    region={continent}
                    subregion={subregion}
                    area={area}
                    population={population}
                    ID={ID}
                    />
               </div>
           
           )
         })
       }
       </>
        )
   
}
if(!navState & !state3){
    return(
          <>
          <div>paises por continente</div>
         </>
          )
     
  }
if(!navState && !state1){
    return (
        <NavStyled>
            <button className="butt" onClick={back} >volver</button>
            <CountryList/>
        </NavStyled>
        
    )
}


}

export default Nav;
