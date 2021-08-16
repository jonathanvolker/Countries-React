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
  border-radius: 10x;
   text-decoration: none;
  
  background: rgb(2,0,36);
  margin: 5px;
}
`

function Inicio(){
    
    
    return(
        <InicioStyled> 
                <img src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2016/05/Mundo.png?w=1560&ssl=1"></img>
               <br/>
                Inicio 
                <a href="http://localhost:3000/home"><input type="button" value="Home"/></a>
                 </InicioStyled>
    )
}

export default Inicio;

