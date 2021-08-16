import React from 'react';
import styled from 'styled-components';

const HomeStyled=styled.div`
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
        <HomeStyled> 
            <div className="container">
            <form >
                    <header> Busque un Pais por su nombre</header>
                    <label>
                        Pais:
                        <input type="text" className="countryInput" name="countryInput" placeholder="ingrese pais..."/>
                        <input type="submit"  value="Buscar"/>                   
                    </label>
                    <br/>
                    <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png" alt="" />
             <div className="details">
                <h2>Nombre </h2>
                <p>Continente  </p>
                <a href=""><input type="button" value="mas detalles"/></a>
             </div>
                      
                    
            </form>
            </div>
        </HomeStyled>
    )
}

export default Home;

