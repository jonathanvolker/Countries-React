import React from 'react'
import InicioStyled from '../styledComponents/InicioStyled'


export default function Loading() {
    const redirect=()=>{
        setTimeout(()=>{window.location.replace("http://localhost:3000/home")}, 2500)}
    
    
    return (
        <InicioStyled>
              Actividad creada.... volviendo a Home en 2 segundos...  {setTimeout(()=>{redirect()},1000)}
        </InicioStyled>
    )
}
