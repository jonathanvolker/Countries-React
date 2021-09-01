import React,{useState,useEffect} from 'react';

import { useDispatch,useSelector } from 'react-redux';
import {getCountries,getCountry, continentState,getActivities,findActivities} from "../redux/actions"
import CountryList from './CountryList'
import NavStyled from "../styledComponents/NavStyled"
 
export default function Nav() {

const dispatch=useDispatch();
const [navState,setNavState]=useState(true) 
const [continent,setContinent]=useState("") //save select contient
const [activity,setActivity]=useState("") //save select activities
const [input,setInput] =useState({pais:""}) // save  input individual country

useEffect(()=>{
    dispatch(getCountries())
    dispatch(getActivities()) // 
},[])


const act= useSelector((state)=>state.Activities) 

const all=async()=>{  // accion del click mostrar
    setNavState(false)}

const selectContinent=(e)=>{ //fijo continente en el estado desde el select
    setContinent(e.target.value)}

const selectActivity=(e)=>{ //fijo actividad en el estado desde el select
    setActivity(e.target.value)}


const actResult= act.filter((item,index)=>{ //muestra las actividades en el select
    return act.indexOf(item) === index;
})

const handleInputCountry= (e)=> { //va seteando en tiempo real el pais a buscar
    setInput({ ...input, [e.target.name]: e.target.value
});}

const handleSubmit= (e)=> {
    e.preventDefault(); }


const handelCountry= ()=> {
    dispatch(getCountry(input.pais))} //accion del boton de fijar un solo pais

const takeContinent=()=>{
    dispatch(continentState(continent))
    
}
const takeActivity=()=>{
   // console.log(activity)
    dispatch(findActivities(activity))
    

}

const back=()=>{
    window.location.replace("http://localhost:3000/home")
     setInput({pais:""})
}
/* const redirect=()=>{
    setTimeout(()=>{window.location.replace("http://localhost:3000/home")}, 1500)
} */
 
if(navState){// solo la nav
   // console.log(act)
    return(
        <>
        
        <NavStyled> 
        <nav >
           
           <div className="form-div"onSubmit={handleSubmit} >
            <form className="form-c"  >
                <header className="head"> Busque un Pais por su nombre o vealos a todos!</header>
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
                    <button className="butt" type="submit" value="Submit" onClick={handelCountry} >aplicar</button>
                  
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
                        <button className="butt" type="button" value="Submit" onClick={takeContinent} >Aplicar</button> 
                <label>
                        <br/>
                        Filtrar actividad:
                        <select name="actividad" value={activity.value} onChange={selectActivity} >
                        <option defaultValue="selected"></option>
                           {actResult.map((a)=>{ 
                                return(
                                    <option value={a} >{a} </option>
                                )
                            })}
                        </select>
                        <button className="butt"type="button" value="Submit" onClick={takeActivity} >Aplicar</button> 
                        <br/>
                        <a className="butt" href="http://localhost:3000/activity">Agregar nueva actividad turistica</a>
                </label>
                        <br/>
                        <br/>
                        <br/>
                        <button className="butt" onClick={all} >MOSTRAR</button>
             </form>
            </div>
         </nav>
        
        </NavStyled>
        
        </>
        )
}
if(!navState){
    return(
        <NavStyled>
         <CountryList/>
        </NavStyled>
    )
}





}


