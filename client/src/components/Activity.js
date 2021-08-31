import React,{useState,useEffect} from 'react'
import ActivityStyled from '../styledComponents/ActivityStyled'
import { useSelector,useDispatch } from 'react-redux';
import {getCountry} from "../redux/actions"


export default function Activity() {
const [initialState, setInitialState]=useState(false)   
const [secondState,setSecondState]=useState(false)
const [input,setInput] =useState({  //controladores de imputs
    countryName:"",
    name:"",
    dificultad:"",
    duracion:"",
    temporada:""
  })

const handleInputChange = function(e) {
    setInput({ ...input, [e.target.name]: e.target.value
    });
}

const handleInputCountry= (e)=> {
     setInput({ ...input, [e.target.name]: e.target.value
     });
}

const handleSubmit= (e)=> {
    e.preventDefault();
  }
const addActivity=async()=>{
    const body=input
    const response= fetch('http://localhost:3001/activity',{
    method: 'POST',
    headers:{ "Content-Type": "application/json"},
    body: JSON.stringify(body)
})

}    
//verificacion de pais e ingreso de actividad
const dispatch=useDispatch(); 

var findCountry= useSelector((state)=>state.Countries)
useEffect(()=>{
    if(input.countryName.length){
        if(input.countryName && findCountry[0])
        setSecondState(true)
        console.log(findCountry[0])

        
    }
       if(findCountry.length){
        setInitialState(true)
            
    } 
    
         
  },[findCountry]);



  const selectCountry= ()=>{
    dispatch(getCountry(input.countryName))
  
}
const back=()=>{
    setSecondState(false)
}



if(initialState === false && secondState === false){

    return (
            <ActivityStyled>
            <>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            ingrese el pais al que desea agregar su actividad:
                            <br/>
                            <input type="text" value={input.countryName} name="countryName" onChange={handleInputCountry} />
                        </label>
                        <input className="butt" type="submit" value="Submit" onClick={selectCountry} required/>
                    </form>
                </div>
                </>
            </ActivityStyled>
        )

}

if(initialState === false && secondState === false){
        return(
            <ActivityStyled>
            <>
            <div>pais no valido</div>
            <br/>
            <input className="butt" type="submit" value="volver" onClick={back} />
            </>
            </ActivityStyled>
        )
}

else{

    return (

     <ActivityStyled>
        <>
         <h1>Creando actividadad para {input.countryName} </h1>
         <div>
         <form onSubmit={handleSubmit}>
            <label>
                Nombre :
                <input className="inp" type="text" value={input.name} name="name" onChange={handleInputChange} required/>
            </label>    
            <br/>
            <label>
                Dificultad:
                <input className="inp" type="text" value={input.dificultad} name="dificultad" onChange={handleInputChange}required />
            </label>    
            <br/>
            <label>
                Duracion :
                <input className="inp" type="text" value={input.duracion} name ="duracion"onChange={handleInputChange}required />
            </label>    
            <br/>
            <label>
                Temporada: 
                <input className="inp" type="text" value={input.temporada} name="temporada" onChange={handleInputChange}required />
            </label>    
               (Invierno,Otoño,Primavera,Verano)
            <br/>
                <input className="butt" onClick={addActivity} value= "Submit" type="submit"/> 
        </form>
        </div>
    </>
    </ActivityStyled>
   )
}
}
