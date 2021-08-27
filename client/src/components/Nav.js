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
const[notCountry, setNoCountry]=useState(false)
const [continent,setContinent]=useState( {
    value : ""
})
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
    //setNavState(false)
    //setState3(false)
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

useEffect(()=>{
    if(typeof(findContinent[0])== "object"){
        console.log("entro al use")
    }
},[findContinent])


useEffect(()=>{
    if(input.pais.length){
       
        if(typeof(input.pais.length && findCountry[0])=="object"){
            
        //    console.log("primer if")
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
},[findCountry])
const oneCountry= ()=>{
dispatch(getCountry(input.pais))


}     
const back=()=>{
    setNavState(true)
    setState2(true)
    
    setInput({pais:""})
}
const redirect=()=>{
    setTimeout(()=>{window.location.replace("http://localhost:3000/home")}, 1500)
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
            <button className="butt" onClick={back} >volver</button>
            <CountryList/>
        </NavStyled>
        
    )
}

if(!navState & !state2){//1 solo pais

        if(!navState && notCountry){ //si el paies no existe
            return(
                <NavStyled>

                 
                 <div>Pais no encontrado</div>
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
                        <div key={name} className="country">
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

export default Nav;
