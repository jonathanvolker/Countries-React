import React,{useState,useEffect} from 'react'
import ActivityStyled from '../styledComponents/ActivityStyled'
import { useSelector,useDispatch } from 'react-redux';
import {getCountries} from "../redux/actions"


export default function Activity() {
const initialState= true ;
const [input,setInput] =useState({  //controladores de imputs
    countryName:[],
    name:"",
    dificultad:"",
    duracion:"",
    temporada:""
  })

const handleInputChange = function(e) {
    const upper= e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    
    setInput({ ...input, [e.target.name]: upper
    });
}

const handleInputCountry= (e)=> {
    if(!input.countryName.includes(e.target.value)){
        setInput({ ...input, countryName : [...input.countryName , e.target.value]
    })}
}

const handleSubmit= (e)=> {
    e.preventDefault();
  }
  const redirect=()=>{
    setTimeout(()=>{window.location.replace("http://localhost:3000/loading")}, 1000)}

const addActivity=async()=>{
    const body=input
    const response= fetch('http://localhost:3001/activity',{
    method: 'POST',
    headers:{ "Content-Type": "application/json"},
    body: JSON.stringify(body)
})
redirect()
}   

const dispatch=useDispatch(); 
var findCountry= useSelector((state)=>state.Countries)

useEffect(()=>{
   dispatch(getCountries())
    
  },[getCountries]);




if( initialState ){
    return (

     <ActivityStyled>
        <>
        <div className ="backDiv">
           <a href="http://localhost:3000/home">
           <input className="butt" type="button" value="Home"/></a>
        </div>
         <h1>Creando actividadad </h1>
         <div>
         <form onSubmit={handleSubmit}>
         <label className= "label">
            <br/>
            Elija el pais:
                        <select name="countryName" value={input.countryName} onChange={handleInputCountry} >
                        <option defaultValue="selected"></option>
                           {findCountry.map((a)=>{ 
                               
                               return(
                                    <option value={a.name} >{a.name} </option>
                                )
                            })}
                         </select>
                             {
                                <ul>
                                   Paises seleccionados: 
                                 {input.countryName.map((e)=>{
                                 return (
                                    <li>{e} </li>
                                 )})} 
                                </ul>
                             }
            </label>    
            <label className= "label">
            <br/>
                Nombre :
                <br/>
                
                <input className={!input.name && "inpError"} type="text" value={input.name} name="name" onChange={handleInputChange} required/>
            </label>    
            <br/>
            <label className= "label">
            <br/>
                Dificultad:
                <br/>
                <input className={!input.dificultad && "inpError"} type="text" value={input.dificultad} name="dificultad" onChange={handleInputChange}required />
            </label>    
            <br/>
            <label className= "label">
            <br/>
                Duracion :
                <br/>
                <input className={!input.duracion && "inpError"} type="text" value={input.duracion} name ="duracion"onChange={handleInputChange}required />
            </label>    
            <br/>
            <label className= "label">
            <br/>
                Temporada: (Invierno,Otoño,Primavera,Verano)
                <br/> 
                <input className={!input.temporada && "inpError"} type="text" value={input.temporada} name="temporada" onChange={handleInputChange} />
            </label>    
                       
             
            <br/>
                <input className="butt" onClick={  addActivity   } 
                                                    value= "Submit" type="submit"
                                   
                                                        /> 
                    </form>
        </div>
    </>
    </ActivityStyled>
   )

}



}
