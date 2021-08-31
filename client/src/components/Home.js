import React from 'react';
import CountryList from './CountryList';
import HomeStyled from "../styledComponents/HomeStyled"
import Nav from "./Nav"
function Home(){
    
    
    return(
        <HomeStyled> 
           <div className="container">
               
                <Nav/>
              </div>
        </HomeStyled>
    )
}

export default Home;

