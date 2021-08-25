import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Country from './Country';
import {getCountries} from "../redux/actions";
import CountryListStyled  from "../styledComponents/CountryListStyled"


function CountryList (){
  //para traer los pases del strore
const dispatch=useDispatch(); 
const posts= useSelector((state)=>state.CountryList)
useEffect(()=>{
  dispatch(getCountries())
 
},[getCountries])

const [orden,setOrden]=useState(false)
//funciones para invertir array de paises
const invert=()=>{
  posts.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
}
const invert2=()=>{
  posts.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

}
//funciones cambio de orden
const changeOrdenZA=()=>{
  setOrden(true);
  invert();
  console.log(posts)
}
const changeOrdenAZ=()=>{
  setOrden(false);
  invert2();
  console.log(posts)
}

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


  if(orden==false){
  if(state[0] === false){
      
    return(
        
      <CountryListStyled>
        <nav >
           
           <div className="form-div" >
            <form className="form-c" >
                <header className="head"> Busque un Pais por su nombre</header>
                <br/>
                <label htmlFor="pais">
                    Pais:
                    <input type="text" 
                           className="countryInput" 
                           name="nombre" 
                           placeholder="ingrese pais..."
                           
                           />
                    <button className="butt"
                            value="Buscar"
                            > Buscar</button>                   
                </label>
                <label>
                     <br/>
                     <br/>
                     Filtrar continente:
                     <select name="continente">
                         <option>Asia</option>
                         <option>Europ</option>
                         <option>Africa</option>
                         <option>Oceania</option>
                         <option>Americas</option>
                         <option>Polar</option>

                     </select>
                     <button className="butt" type="submit">Aplicar</button>
                </label>
                <label>
                     <br/>
                    
                     Filtrar actividad:
                     <select name="actividad">
                         <option>Actividad{/** aca iria el mapeo de la 
                           actvidad turistica
                           */} </option>
                     </select>
                     <button className="butt" type="submit"> Aplicar</button>
                     <br/>
                     <a className="act" href="http://localhost:3000/activity">agregar nueva actividad Turistica</a>
               
                     </label>
                
            </form>
            </div>
            </nav>


         <h1>Todos los paises</h1>
         <div className="navOrder">
              <button key="a" className="boton_personalizado" onClick={changeOrdenAZ} >A/Z </button>
              <button key="a" className="boton_personalizado" onClick={changeOrdenZA} >Z/A </button>
         </div>
         <nav className="paginate">
            <ul>
              { pageNumbers.map((number)=>{
                  return ( 
                      <a className="boton_personalizado"
                      onClick={()=> paginate(number) }>
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
           return (
           <>
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
     ) })
  }
 }else{
  if(state[0] === false){
      
    return(
        
      <CountryListStyled>
                 <nav >
           <div className="form-div" >
            <form className="form-c" >
                <header className="head"> Busque un Pais por su nombre</header>
                <br/>
                <label htmlFor="pais">
                    Pais:
                    <input type="text" 
                           className="countryInput" 
                           name="nombre" 
                           placeholder="ingrese pais..."
                           
                           />
                    <button className="butt"
                            value="Buscar"
                            > Buscar</button>                   
                </label>
                <label>
                     <br/>
                     <br/>
                     Filtrar continente:
                     <select name="continente">
                         <option>Asia</option>
                         <option>Europ</option>
                         <option>Africa</option>
                         <option>Oceania</option>
                         <option>Americas</option>
                         <option>Polar</option>

                     </select>
                     <button className="butt" type="submit">Aplicar</button>
                </label>
                <label>
                     <br/>
                    
                     Filtrar actividad:
                     <select name="actividad">
                         <option>Actividad{/** aca iria el mapeo de la 
                           actvidad turistica
                           */} </option>
                     </select>
                     <button className="butt" type="submit"> Aplicar</button>
                     <br/>
                     <a className="act" href="http://localhost:3000/activity">agregar nueva actividad Turistica</a>
                </label>
                
            </form>
            </div>
            </nav>

              <h1>Todos los paises</h1>
              <div className="navOrder">
                  <button key="a" className="boton_personalizado" onClick={changeOrdenAZ} >A/Z </button>
                  <button key="a" className="boton_personalizado" onClick={changeOrdenZA} >Z/A </button>
              </div>
              <nav className="paginate">
                 <ul>
                   {
                     pageNumbers.map((number)=>{
                         return ( 
                         
                             <a className="boton_personalizado"
                             onClick={()=> paginate(number) } >
                               {number} 
                             </a>
                         )
                         })
                     }
                 </ul>
              </nav>
            <div className="countryOrder">
              {currentPost.map(({ subregion,name, flag,continent, area, population,ID }) => {
                  return (
                  <>
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
                }) }
            </div>
       </CountryListStyled>
       
   )
      
  }

  else{
    currentPost.map(({ name, flag,continent }) => {
      return (
      <>
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
}


export default CountryList;