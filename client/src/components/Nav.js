import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';
import {getCountry,getCountriesPerContinent, getCountries} from "../redux/actions"
import CountryList from './CountryList'
import Country from "./Country"
 
const NavStyled=styled.div`

nav{
    display: flex;
    justify-content: center;
    background-image: url("https://i.ibb.co/cLKQFjK/Map-1000x500-1.jpg");  
    background-repeat: repeat-x;
    
   
}
.t{
    display: flex;
    flex-direction:column ;
    font-size:25px;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
    
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
.oneCountry{
    display: flex;
    flex-direction:column ;
    
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
.backButton{
    display: flex;
    justify-content:center;
}
`

function Nav(){
const dispatch=useDispatch();
const[navState,setNavState]=useState(true)
const [state1,setState1]=useState(true)
const [state2,setState2]=useState(true)
const [state3,setState3]=useState(true)
const [notCountry, setNoCountry]=useState(false)//estado por si no hay paises
const [notContinent,setNotContinent]=useState(false)//para el estado cargando del filtrado x continentes
const [continent,setContinent]=useState( {value : "" })//input del select continente
const [input,setInput] =useState({ pais: "" }) //input de 1 solo pais
const findCountry= useSelector((state)=>state.Country)
const findContinent=useSelector((state)=>state.CountryContinent)


const all=async()=>{  //boton de mostrar todos
    setNavState(false)
    setState1(false)
}

const selectContinent=(e)=>{ //seteador de continente para enviarlo al reducer
    setContinent(e.target.value)
}

const handleInputCountry= (e)=> { //guardador de input de ingreso de un solo pais
    setInput({ ...input, [e.target.name]: e.target.value
});}

const handleSubmit= (e)=> {
    e.preventDefault();
 }

const takeContinent=()=>{ //boton para submit del select continente
    dispatch(getCountriesPerContinent(continent))
        console.log("entro al take")
         //setNavState(false)
         //setState3(false)
}

useEffect(()=>{
   if(continent.value.length){
        if(typeof(findContinent[0]=="object")){
            setNavState(false)
            setState3(false)
            setNotContinent(true)
 
 }else{ setNotContinent(true)}
}
    if(input.pais.length){
        if(typeof( findCountry[0])=="object"){
            if(findCountry[0].name==input.pais){
            setNavState(false)
            setState2(false)
            setNoCountry(false)}

        }else{
            setState2(false)
            setNavState(false)
            setNoCountry(true)
        }
 } 
},[findCountry,findContinent])


const oneCountry= ()=>{ // submit de buscar un solo pais
    dispatch(getCountry(input.pais))
}     

const back=()=>{    //boton volver atras
    setNavState(true)
    setState2(true)
    
}
const redirect=()=>{
    setTimeout(()=>{window.location.replace("http://localhost:3000/home")}, 60000)
}
 
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
                    <button className="butt" type="submit" value="Submit" onClick={oneCountry} >buscar</button>
                  
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
if(!navState && !state1){ // todos los paises
    return (
        <NavStyled>
            <div className="backButton">
            <button className="butt" onClick={back} >volver</button>
            </div>
            <CountryList/>
        </NavStyled>
        
    )
}

if(!navState & !state2){//1 solo pais

        if(!navState && notCountry){ //si el paies no existe
            return(
                <NavStyled>

                 <div className="t">
                 <div className="t">Pais no encontrado</div>
                 <br/>
                 <div className="t"> redireccionando...</div>
                 </div>
                { redirect()}

                </NavStyled>
            )
        }

       if(!navState && !notCountry) {//si el pais existe
            return(
                    <>
                    {
                    findCountry.map(({ subregion,name, flag,continent, area, population,ID }) => {
                    return (
                        <div key={name} className="oneCountry">
                            <button className="butt" onClick={back}>Volver</button>
                            
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
}
if(!navState & !state3){ //paises por continente
    
    if(!navState& notContinent){
        return(
            <NavStyled>
            <div>
                cargando
            </div>
            </NavStyled>
        )
    }
 if(!navState&!notContinent){
    return(
        <>
           {
         findContinent.map(({ subregion,name, flag,continent, area, population,ID }) => {
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
}


}

export default Nav;
