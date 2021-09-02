
import styled from "styled-components";
const ActivityStyled=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Courier New', Courier, monospace;
//border: 1px solid;
padding:4em 2em;
background:#d7ebba; 

.butt{
 font-weight: 50px;
  font-size: 11px;
  color: black;
  background-color: #DC702E; ;
  border-radius: 2px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
}
.butt:hover{
    color: black ;
    background-color: #D2A03D ;
}
.inp{
  text-decoration: none;
  font-size: 17px;
  color: black;
  border-radius: 2px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
}
.inpError{
  text-decoration: none;
  font-size: 17px;
  color: black;
  border-radius: 2px;
  margin-left:10px;
  transition-duration: 0.3s;
  border: 1px solid red;
}
.label{
  display: flex;
  flex-direction: column;
}
.backDiv{
  width: 100%;
} 

input:disabled , input[disabled]{
  background: #ccc;
  color:#666;
  cursor:not-allowed;
  &:hover{
    background: #666;
    color:#ccc;
  }

}

`;

export default ActivityStyled;