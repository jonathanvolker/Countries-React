import React,{useState} from 'react'
import ActivityStyled from '../styledComponents/ActivityStyled'
import { useSelector,useDispatch } from 'react-redux';
import {getCountry} from "../redux/actions"
export default function Activity() {
    
 const [country, setCountry]=useState(false)   

 //controladores de imputs
 const [input,setInput] =useState({
    pais:"",
    nombre:"",
    dificultad:"",
    duracion:"",
    temporada:""
  })



  const handleInputChange = function(e) {
    
    setInput({ ...input, [e.target.name]: e.target.value
                          //se pone entrecorchetes la var que nose cual va a ser
                        //y e.target.name seria lo escrito en el input en tiempo real
    });
  }
  const handleInputCountry= (e)=> {
    
    setInput({ ...input, [e.target.name]: e.target.value
                         
    });
    
    
    
  }

 
const prueba= ()=>{
    
    dispatch(getCountry(input.pais))
    
}

const handleSubmit= (e)=> {
    e.preventDefault();
   
   
  }
    
//verificacion de pais e ingreso de actividad
const dispatch=useDispatch(); 

var findCountry= useSelector((state)=>state.CountryDetail)










if(country === false){

return (
    <ActivityStyled>i
    <>
    <div>
    <form onSubmit={handleSubmit}>
    <label>
      ingrese el pais al que desea agregar su actividad:
      <br/>
      <input type="text" value={input.pais} name="pais" onChange={handleInputCountry} />
    </label>
    <input className="butt" type="submit" value="Submit" onClick={prueba} />
  </form>
  </div>
</>
</ActivityStyled>
)

}else{

    return (

        <ActivityStyled>
        <>
        <div>
        <form onSubmit={handleSubmit}>
        <label>
          Nombre :
          <input className="inp" type="text" value={input.nombre} name="nombre" onChange={handleInputChange} />
        </label>    
        
        <br/>
        <label>
          Dificultad:
          <input className="inp" type="text" value={input.dificultad} name="dificultad" onChange={handleInputChange} />
        </label>    
        
        <br/>
        <label>
          Duracion :
          <input className="inp" type="text" value={input.duracion} name ="duracion"onChange={handleInputChange} />
        </label>    
        
        <br/>
        <label>
          Temporada: 
          <input className="inp" type="text" value={input.temporada} name="temporada" onChange={handleInputChange} />
          
        </label>    
        
        (Invierno,Otoño,Primavera,Verano)
        <br/>
        <input className="butt"  type="submit" value="Submit" />
      </form>
      </div>
    </>
    </ActivityStyled>
   )
}
}
