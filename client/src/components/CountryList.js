import React, { useEffect, useState } from 'react';
import styled from "styled-components";

//import { useSelector,useDispatch } from 'react-redux';
import Country from './Country';

const CountryListStyled=styled.div`
display:grid;
grid-row-gap: 2.3em;
background: var(--background);
justify-content: center;
border: 1px solid red;
padding:4em 2em;
background: linear-gradient(to bottom, blue 50%, lightblue 75%);

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