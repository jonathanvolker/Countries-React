import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useSelector,useDispatch } from 'react-redux';
import Country from './Country';

import {getCountries} from "../redux/actions"


const CountryListStyled=styled.div`
display:grid;
grid-row-gap: 2.3em;
background: var(--background);
justify-content: center;
align-items: center;
//border: 1px solid;
padding:4em 2em;
background: grey;
.boton_personalizado1{
    text-decoration: none;
    padding: 5px;
    font-weight: 50px;
    font-size: 10px;
    color: black;
    //background-color: #1883ba;
    border-radius: 6px;
    border: 1px solid black;
    margin-left: 70px;
  }
.boton_personalizado{
  
    text-decoration: none;
    padding: 5px;
    font-weight: 50px;
    font-size: 10px;
    color: black;
    //background-color: #1883ba;
    border-radius: 6px;
    border: 1px solid black;
    margin-left:1px;
  }
  .boton_personalizado:hover{
    color: #1883ba;
    background-color: #ffffff;
  }
.country{
  display: grid;
  justify-content: center;
}
`;


function CountryList (){
  //para traer los pases del strore
const dispatch=useDispatch(); 
const posts= useSelector((state)=>state.CountryList)
useEffect(()=>{
  dispatch(getCountries())
},[getCountries])

//seteo estado para iniciar lista
const [state,setState]=useState([false]);

//seteo cantidades a la lista
const [currentPage,setCurrentPage]=useState(1);
const [postsPerPage,setPostPerPage]=useState(10);
const pageNumbers=[];
const totalPost= posts.length;
const indexOfLastPost= currentPage*postsPerPage;
const indexOfFirstPost= indexOfLastPost - postsPerPage;
const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

//ciclo para crear los botones de paginado
for(let i=1; i<= Math.ceil(totalPost /postsPerPage);i++){
    pageNumbers.push(i)
}
//fn para cambiar la pagina
const paginate= (pageNumbers) =>{
  setCurrentPage(pageNumbers)
}

const changeValidation=()=>{ 
  setState(true)  
}

const handleSubmit =(e)=>{
  e.preventDefault();
  changeValidation();
}

  if(state[0] === false){
      
      return(
      <CountryListStyled>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <h2>Mostrar todos</h2>
        <button className="boton_personalizado1" type="submit" onClick={handleSubmit}>Mostrar 10</button>
        </div>
        </form>
      </CountryListStyled>)
  }

  else{
    return(
        
       <CountryListStyled>
         
               <nav>
                  <ul>
                      {
                      pageNumbers.map((number)=>{
                          return ( 
                          
                              <a className="boton_personalizado"
                              onClick={()=> paginate(number) }
                              >
                                {number} 
                              </a>
                          )
                          })
                      }
                  </ul>
               </nav>
          
            {
          currentPost.map(({ name, flag,continent }) => {
            return (<>
              <div className="country">
              <Country
                key={name}
                flag={flag}
                name={name}
                region={continent}
                />
                </div>
              </>
            )
          })
        }

        </CountryListStyled>
        
    )}
    
}


export default CountryList;