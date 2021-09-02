import styled from 'styled-components';

const InicioStyled=styled.div`
width:100%;
text-align:center;
border-radius:5px;
overflow: hidden;
box-shadow:0 0 7px 2px rgba(0,0,0,.03);
font-family: 'Courier New', Courier, monospace;
font-size: 35px;
color: black;

.container{
margin-top: 110px;
}

.tittle{
  display: flex;
  font-family: fantasy;
}
.world{
    width:70%;
    height:70%;
    object-fit:cover;
    border-radius:10px;
  }

  .a{
  border-radius: 20x;
   text-decoration: none;
    background: rgb(2,0,36);
    margin: 5px;
}

.homebutton{
  width: 120px;
  height: 120px;
  text-decoration: none;
  padding: 5px;
  font-weight: 50px;
  font-size: 17px;
  color: black;
  background-color: #DC702E;
  border-radius: 50%;
  border: 1px solid black;
  margin-left:-1050px;
  transition-duration: 0.3s;
  font-family: 'Courier New', Courier, monospace;
}

.homebutton:hover{
    color: black;
    background-color: #D2A03D ;
}
`

export default InicioStyled;