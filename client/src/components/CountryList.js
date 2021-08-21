import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useSelector,useDispatch } from 'react-redux';
import Country from './Country';
import * as ActionsCreators from "../redux/actions"
import {getCountries} from "../redux/actions"

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
const dispatch=useDispatch(); 
const data= useSelector((state)=>state.CountryList)

console.log("mi lista de paises",data)

 //const [data, setData] = useState([]);

  useEffect(() => {
     dispatch(getCountries())
    /*     fetch('http://localhost:3001/countries')
      .then((response) => {
        return response.json()
      })
      .then((list) => {
       // console.log(list)
        //setData(list)
        
      })
      .catch(() => {
        console.log('error paises no encontrados')
      }) */
  }, [])


    return(
        
        <CountryListStyled>
          <label>
          <a className="boton_personalizado" href=""> prev</a>
          <a className="boton_personalizado" href="">next</a>
          </label>
            {
          data.map(({ name, flag,continent }) => {
            return (
              <Country
                key={name}
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