
import styled from "styled-components";
const ActivityStyled=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Courier New', Courier, monospace;
//border: 1px solid;
padding:4em 2em;
background:#d7ebba; ;//linear-gradient(120deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 17%, rgba(0,212,255,1) 100%);


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
    color: #0FA2DD ;
    background-color: #ffffff;
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