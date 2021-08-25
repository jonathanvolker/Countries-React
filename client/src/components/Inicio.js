import React from 'react';
import styled from 'styled-components';

const InicioStyled=styled.div`
width:100%;
text-align:center;
border-radius:5px;
overflow: hidden;
box-shadow:0 0 7px 2px rgba(0,0,0,.03);
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(136,148,240,1) 0%, rgba(106,120,227,1) 39%, rgba(55,71,191,1) 100%);

.img{
    width:50%;
    height:70%;
    object-fit:cover;
    border-radius:10px;
}
.a{
  border-radius: 20x;
   text-decoration: none;
  
  background: rgb(2,0,36);
  margin: 5px;
}
.homebutton{
  
  text-decoration: none;
  padding: 5px;
  font-weight: 50px;
  font-size: 17px;
  color: black;
  background-color: #0FA2DD;
  border-radius: 6px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
}
.homebutton:hover{
    color: #1883ba;
    background-color: #ffffff;
}
`

function Inicio(){
    
    
    return(
        <InicioStyled> 
                <h1>Henry Countries</h1>
                <a href="http://localhost:3000/home">
                <input className="homebutton" type="button" value="Home"/></a>
                <br/>
                <a href="https://imgbb.com/"><img src="https://i.ibb.co/3hmB1t1/banderas.gif" alt="banderas" border="0"/></a>
                <br/>
                
        </InicioStyled>
    )
}

export default Inicio;

