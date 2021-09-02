

import styled from "styled-components";
const CountryListStyled=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Courier New', Courier, monospace;

.paginate{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 90%;

}
 .activities{
   width: 100%;
   height: 100%;
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
    background:#DC702E; ;
    border-radius: 6px;
    border: 1px solid black;
    
  }
  
  .boton_personalizado:hover{
    color: black;
    background-color: #D2A03D ;
  }
.form-group{
  display: inline; }
  
.countryOrder{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-height: 100%;
    max-width: 100%;
}

.navOrder{
 display: flex;
 flex-direction: row;
  }
.order{
  text-decoration: none;
}
.backDiv{
  width: 100%;
} 
.form-div{
    display: block;
    font-size: 20px;
    margin-left: 20px;
}
.form-c{
    font-family: 'Courier New', Courier, monospace;
    color:black;
    font-weight: bold;
    font-size: 22px;
}
.countryInput{
    background: white;
    height: 17px;
    border-radius: 6px;
}
.butt{
 font-weight: 5px;
  font-size: 11px;
  color: black;
  //background-color: #0FA2DD ;
  border-radius: 2px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
  text-decoration: none;
  
}
.butt:hover{
    color: black ;
    background-color: #D2A03D ;
}
.act{
  text-decoration: none;
  font-weight: 50px;
  font-size: 17px;
  color: black;
  //background-color: #0FA2DD ;
  border-radius: 2px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
}
.act:hover{
  color: black ;
    background-color: #D2A03D ;
}
`;

export default CountryListStyled;