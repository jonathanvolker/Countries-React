import React from 'react'
import NavStyled from '../styledComponents/NavStyled'


export default function Loading() {
const redirect=()=>{
    setTimeout(()=>{window.location.replace("http://localhost:3000/home")}, 2500)}

    
    return (
        <NavStyled>
             <div className="loading"> Actividad creada.... volviendo a Home en 2 segundos... {redirect()}</div>
        </NavStyled>
    )
}
