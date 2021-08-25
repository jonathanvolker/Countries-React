import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useSelector,useDispatch } from 'react-redux';
import Country from './Country';

import {getCountries,getCountry} from "../redux/actions"


const CountryListStyled=styled.div`
display:flex;
flex-direction: column;

justify-content: center;
align-items: center;

//border: 1px solid;
padding:4em 2em;
//background: linear-gradient(120deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
.paginate{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}
  
.boton_personalizado1{
    text-decoration: none;
    padding: 5px;
    font-weight: 50px;
    font-size: 10px;
    color: black;
    //background-color: #1883ba;
    border-radius: 6px;
    border: 1px solid black;
    margin-left: 55px;
  }
.boton_personalizado{
  
    text-decoration: none;
    padding: 5px;
    font-weight: 50px;
    font-size: 10px;
    color: black;
    background:#0FA2DD ;
    border-radius: 6px;
    border: 1px solid black;
    
    
  }
  .boton_personalizado:hover{
    color: #1883ba;
    background-color: #ffffff;
  }
.form-group{
  display: inline; }
  
.countryOrder{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

 
}
.navOrder{
 display: flex;
 flex-direction: column;
  }
.order{
  text-decoration: none;
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
              <h1>Todos los paises</h1>
              <div className="navOrder">
              
                <a key="a" className="order" href="">Z/A</a>
              </div>
              <nav className="paginate">
                
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
         <div className="countryOrder">
           {
         currentPost.map(({ subregion,name, flag,continent, area, population,ID }) => {
           return (<>
           
             <div className="country">
             <Country
               key={name}
               flag={flag}
               name={name}
               region={continent}
               subregion={subregion}
               area={area}
               population={population}
               ID={ID}
               />
               </div>
             </>
           )
         })
       }</div>

       </CountryListStyled>
       
   )
      
  }

  else{
    currentPost.map(({ name, flag,continent }) => {
      return (<>
      
        <div className="country">
        <Country
          key={name}
          flag={flag}
          name={name}
          region={continent}
          changeValidation={changeValidation}
          />
          </div>
        </>
      )
    })
  
  
  
  
  }
    
}


export default CountryList;