import React from 'react';
//import CountryStyled from "./stylesJS/countrystyled"
import styled from "styled-components";

const CountryStyled =styled.div`
width:264px;
text-align:left;
border-radius:5px;
overflow: hidden;
box-shadow:0 0 7px 2px rgba(0,0,0,.03);
img{
    width:100%;
    height:160px;
    object-fit:cover;
}
.details{
    padding:1.5em;
}
h2{
    margin:0;
    margin-bottom: 1rem;
    font-size: 20px;
    }
p{
    font-size: 1em;
    margin-bottom:.5rem
}

`;


function Country({ name, flag, region}) {
    
    return(
        <>
        <CountryStyled>
             
             <img loading="lazy" src={flag} alt="" />
             <div className="details">
                <h2> {name}</h2>
                <p> <strong> Continente: {region}</strong> </p> 
                <br/>
                <input type="submit"  value="Mas informacion"/>
                <br/>
                <br/>
                <input type="submit"  value="agregar actividad turistica"/>
             </div>
        </CountryStyled>
    </>
    )

}

export default Country;
