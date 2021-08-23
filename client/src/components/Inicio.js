import React from 'react';
import styled from 'styled-components';

const InicioStyled=styled.div`
width:100%;
text-align:center;
border-radius:5px;
overflow: hidden;
box-shadow:0 0 7px 2px rgba(0,0,0,.03);
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
img{
    width:50%;
    height:50%;
    object-fit:cover;
    border-radius:10px;
}
a{
  border-radius: 20x;
   text-decoration: none;
  
  background: rgb(2,0,36);
  margin: 5px;
}
button{
    border-radius:10px;
}
`

function Inicio(){
    
    
    return(
        <InicioStyled> 
                <h1>Henry Countries</h1>
                 
                <a href="http://localhost:3000/home">
                <input type="button" value="Home"/></a>
                <br/>
                <a href="https://imgbb.com/"><img src="https://i.ibb.co/3hmB1t1/banderas.gif" alt="banderas" border="0"/></a>
                <br/>
                
        </InicioStyled>
    )
}

export default Inicio;

