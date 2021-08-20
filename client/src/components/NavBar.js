import React,{useState} from 'react';
import styled from 'styled-components';

const navBarStyled=styled.div`
container{
    border: 1px solid black;
    align-items: center;
}
 
 form{
     border: 1px solid black
 }
 input {
    /* width: 100%; */
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: .7em;
    outline: 0;
    color: var(--black);
    background: var(--white);
    &::-webkit-input-placeholder {
      color: #C4C4C4;
    }
  }
  header{
      align-items: center;
  }

`

function Home(){


    
    return(
        <navBarStyled> 
            <div className="container">
            <form >
                <header> Busque un Pais por su nombre</header>
                <br/>
                <label>
                    Pais:
                    <input type="text" 
                           className="countryInput" 
                           name="countryInput" 
                           placeholder="ingrese pais..."/>
                    <input type="submit"  
                           value="Buscar"/>                   
                </label>
                <label>
                     <br/>
                     <br/>
                     Filtar continente:
                     <select name="continente">
                         <option>America</option>
                         <option>Europa</option>
                         <option>Asia</option>
                         <option>Oceania</option>
                     </select>
                     <input type="submit" value="Aplicar"/>
                </label>
                <label>
                     <br/>
                    
                     Filtar actividad:
                     <select name="actividad">
                         <option>Actividad{/** aca iria el mapeo de la 
                           actvidad turistica
                           */} </option>
                     </select>
                     <input type="submit" value="Aplicar"/>
                </label>
                
            </form>
           
            </div>
        </navBarStyled>
    )
}

export default Home;