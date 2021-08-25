import React from 'react';
import CountryList from './CountryList';
import HomeStyled from "../styledComponents/HomeStyled"
 
function Home(){
    
    
    return(
        <HomeStyled> 
           <div className="container">
              
                <CountryList state={false} />
            </div>
        </HomeStyled>
    )
}

export default Home;

