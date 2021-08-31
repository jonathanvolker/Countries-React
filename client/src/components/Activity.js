import React,{useState,useEffect} from 'react'
import ActivityStyled from '../styledComponents/ActivityStyled'
import { useSelector,useDispatch } from 'react-redux';
import {getCountries} from "../redux/actions"


export default function Activity() {
const [initialState, setInitialState]=useState(true)   
const [secondState,setSecondState]=useState(false)
const [treeState,setTreeState]=useState(false)
const [count, setCount]=useState([])
const [oneCountry,setOneCountry]=useState({})
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
//verificacion de pais e ingreso de actividad
const dispatch=useDispatch(); 

var findCountry= useSelector((state)=>state.Countries)


useEffect(()=>{
   dispatch(getCountries())
    
  },[getCountries]);

const filtrado = ()=>{
const f= findCountry.filter(e => e.name == input.countryName )
  return f
} 
const selectCountry= ()=>{
   if(filtrado().length){
        setInitialState(false)  
        setTreeState(true)
       
   }else{
       setInitialState(false)
       setSecondState(true)
       setTreeState(false)   
    }
}

const autoBack=()=>{
    setTimeout(()=>{window.location.replace("http://localhost:3000/activity")},1000)
}
const back=()=>{
    setTimeout(()=>{window.location.replace("http://localhost:3000/home")},500)
}


if(initialState){

    return (

        
            <ActivityStyled>
            <>
                <div>
                <button className="butt" onClick={back}> go Home</button>
                    <form onSubmit={handleSubmit}>

                        <label>
                            Ingrese Pais:
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

else if( secondState === true){
        return(
            <ActivityStyled>

            <>
           
            <div>Pais no encontrado</div>

            <br/>
            <div>regresando....</div>
            {autoBack()}
            </>
            </ActivityStyled>
        )
}

else if(treeState){

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
                <input className="inp" type="text" value={input.temporada} name="temporada" onChange={handleInputChange} />
            </label>    
               (Invierno,Otoño,Primavera,Verano)
            <br/>
                <input className="butt" onClick={addActivity} value= "Submit" type="submit" disable={input.temporada != "Verano" ||
                                                                                                     input.temporada != "Invierno" ||
                                                                                                     input.temporada != "Otoño" ||
                                                                                                     input.temporada != "Primavera" }   /> 
        </form>
        </div>
    </>
    </ActivityStyled>
   )
}
}
