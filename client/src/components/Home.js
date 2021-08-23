import React from 'react';
import styled from 'styled-components';
import CountryList from './CountryList';
import NavBar from './NavBar'
 
const HomeStyled=styled.div`
/*container{
    border: 1px solid black;
    align-items: center;
}
 
 form{
     border: 1px solid black
 }
 input {
   
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
  }*/

`
 
function Home(){
    
    
    return(
        <HomeStyled> 
           <div className="container">
                <NavBar/>
                <br/>
                <CountryList state={false} />
            </div>
        </HomeStyled>
    )
}

export default Home;

