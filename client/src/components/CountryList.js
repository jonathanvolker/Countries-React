import React, { useEffect, useState } from 'react';
import styled from "styled-components";

//import { useSelector,useDispatch } from 'react-redux';
import Country from './Country';

const CountryListStyled=styled.div`
display:grid;
grid-row-gap: 2.3em;
background: var(--background);
justify-content: center;
//border: 1px solid;
padding:4em 2em;
background: grey;
.boton_personalizado{
    text-decoration: none;
    padding: 5px;
    font-weight: 50px;
    font-size: 10px;
    color: black;
    //background-color: #1883ba;
    border-radius: 6px;
    border: 1px solid black;
  }
  .boton_personalizado:hover{
    color: #1883ba;
    background-color: #ffffff;
  }

`;


function CountryList (){


 const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/countries')
      .then((response) => {
        return response.json()
      })
      .then((list) => {
       // console.log(list)
        setData(list)
        
      })
      .catch(() => {
        console.log('hubo un error, que dolor que dolo que pena')
      })
  }, [])


    return(
        
        <CountryListStyled>
          <label>
          <a class="boton_personalizado" href=""> prev</a>
          <a class="boton_personalizado" href="">next</a>
          </label>
            {
          data.map(({ name, flag,continent }) => {
            return (
              <Country
                flag={flag}
                name={name}
                region={continent}
              />
            )
          })
        }
              
            
            
        </CountryListStyled>
        
    )
}


export default CountryList;