

import styled from "styled-components";
const CountryListStyled=styled.div`
display:flex;
flex-direction: column;

justify-content: center;
align-items: center;
font-family: 'Courier New', Courier, monospace;
//border: 1px solid;
//padding:4em 2em;
//background: linear-gradient(120deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
.paginate{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
 flex-direction: row;
  }
.order{
  text-decoration: none;
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
 font-weight: 50px;
  font-size: 11px;
  color: black;
  background-color: #0FA2DD ;
  border-radius: 6px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
}
.butt:hover{
    color: #0FA2DD ;
    background-color: #ffffff;
}
.act{
  text-decoration: none;
  font-weight: 50px;
  font-size: 17px;
  color: black;
  background-color: #0FA2DD ;
  border-radius: 6px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
}
.act:hover{
  color: #0FA2DD ;
    background-color: #ffffff;
}
`;

export default CountryListStyled;