import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Country from './Country';
//import {getCountries, getCountry} from "../redux/actions";
import CountryListStyled  from "../styledComponents/CountryListStyled"
//import Nav from './Nav';
import CountryActivity from './CountryActivity';

function CountryList (){
 
const post= useSelector((state)=>state.Countries)

const [posts,setPosts]=useState(post)

const [orden,setOrden]=useState(false)
const [state2, setState2]=useState(false)
const continent = useSelector((state)=> state.Continent)
const activities = useSelector((state)=> state.AllActivities)//

//console.log(activities)
useEffect(()=>{
  
if(continent.length){
  let countriesPerContinent= posts.filter(country=>
    country.continent === continent
   ) 
   setPosts(countriesPerContinent)
}
if(activities.length){
  setOrden(false)
  setState2(true)
  //console.log(activities,"segundo if")
}
},[continent])

///////////////////
//funciones para invertir array de paises
const invert=()=>{
  posts.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    
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
    
    return 0;
  });

}
const inverPopulation=()=>{
  posts.sort(function (a, b) {
    if (a.population > b.population) {
      return -1;
    }
    if (a.population < b.population) {
      return 1;
    }
    
    return 0;
  });
}
const inverPopulation2=()=>{
  posts.sort(function (a, b) {
    if (a.population > b.population) {
      return 1;
    }
    if (a.population < b.population) {
      return -1;
    }
    
    return 0;
  });

}


//funciones cambio de orden
const changeOrdenZA=()=>{
  setOrden(true);
  invert();
  
}
const changeOrdenAZ=()=>{
  setOrden(false);
  invert2();
 
}
const changePopulationUp=()=>{
  setOrden(true)
  inverPopulation()
}
const changePopulationDown=()=>{
  setOrden(false)
  inverPopulation2()
}


//seteo estado para iniciar lista
const [state,setState]=useState(false);

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

if(!orden && state2){
 //console.log(activities[0].countries)
 return(

  <>
    { activities.map((act) => {
          console.log(act.name)

         return (
          <>
             <div key={act.countries.name} className="country">
                 <CountryActivity
                   key={act.countries[0].name}
                   flag={act.countries[0].flag}
                   countryName={act.countries[0].name}
                   
                   name={act.name}
                   dificultad={act.dificultad}
                   duracion={act.duracion}
                   temporada={act.temporada}
                   />
                  
              </div>
          </>
          )
         }) }
  </>

 )
   
  


}
  if(orden==false ){
  if(state === false){
     //console.log(currentPost[0][0])
    return(
      currentPost[0][0] !== undefined ? 

              ( <CountryListStyled>
                  
                  <h1 className="countries">Mostrando {currentPost[0][0].name} </h1>
            
                  <div key="uniqueID" className="countryOrder">
                    {
            currentPost.length > 2 || undefined ? (
              currentPost.map(({ subregion,name, flag,continent, area, population,ID }) => {
              

                return (
                <>
                    <div key={name} className="country">
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
                }))  : (<Country 
                            key={currentPost[0][0].ID}
                            flag={currentPost[0][0].flag}
                            name={currentPost[0][0].name}
                            region={currentPost[0][0].continent}
                            subregion={currentPost[0][0].subregion}
                            area={currentPost[0][0].area}
                            population={currentPost[0][0].population}
                            ID={currentPost[0][0].ID}
                        />
                        
                        )
            }     </div>
            </CountryListStyled>) : (
                        <div className >pais no encontrado</div>
             )
   )
  }

  else{
    currentPost.map(({ name, flag,continent }) => {
      return (<>
      
        <div key={name} className="country">
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
  if(state === false){
      
    return(
        
      <CountryListStyled>
            

              <h1>Todos los paises</h1>
              <div className="navOrder">
                  <button key="a" className="boton_personalizado" onClick={changeOrdenAZ} >A/Z </button>
                  <button key="b" className="boton_personalizado" onClick={changeOrdenZA} >Z/A </button>
                  <button key="a" className="boton_personalizado" onClick={changePopulationDown} >poblacion - </button>
                  <button key="b" className="boton_personalizado" onClick={changePopulationUp} >poblacion + </button>

              </div>
              <nav className="paginate">
                 <ul>
                   {
                     pageNumbers.map((number)=>{
                         return ( 
                         
                             <a key={number} className="boton_personalizado"
                             onClick={()=> paginate(number) } >
                               {number} 
                             </a>
                         )
                         })
                     }
                 </ul>
              </nav>
            <div key="uniqueID" className="countryOrder">
              {currentPost.map(({ subregion,name, flag,continent, area, population,ID }) => {
                  return (
                  <>
                    <div key={name} className="country">
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
        <div key={name} className="country">
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