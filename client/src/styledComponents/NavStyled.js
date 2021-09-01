import styled from 'styled-components';

const NavStyled=styled.div`


display: flex;
justify-content: center;
    
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
 font-weight: 10px;
  font-size: 11px;
  color: black;
  background-color:#DC702E; //rgb(136,148,240);
  border-radius: 2px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
  max-width: 50px;
max-height: 30px;
text-decoration: none;
}
.butt:hover{
    color: #0FA2DD ;
    background-color: #ffffff;
}
`
export default NavStyled;