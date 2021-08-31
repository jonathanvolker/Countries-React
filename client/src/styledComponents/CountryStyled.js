
import styled from "styled-components";


const CountryStyled =styled.div`
/* width:264px;
text-align:left;
border-radius:5px;
overflow: hidden;
box-shadow:0 0 7px 2px rgba(0,0,0,.03);
 */
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.802);
    background: linear-gradient(120deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    font-style: oblique;
    margin-top: 5%;
    box-shadow: 3px 3px #0A055A, -1em 0 0.4em rgba(5, 9, 121,1);
    margin-left: 50px;
    margin-bottom: 10px;
    border-radius: 15px;
    width: 350px;
    max-height: 600px;
img{
    margin-top: 5px;
    margin-right: 3px;
    max-width:100%;
    height:200px;
    object-fit:cover;
    border-radius:10px
}
.countries{
    font-family: 'Courier New', Courier, monospace;
}
.details{
    padding:1.5em;
    color:white;
    text-overflow: ellipsis;
    overflow: hidden;
}
.mfInput{
  text-decoration: none;
  font-weight: 50px;
  font-size: 11px;
  color: black;
  background-color: #0FA2DD ;
  border-radius: 6px;
  border: 1px solid black;
  margin-left:1px;
  transition-duration: 0.3s;
}
.mfInput:hover{
    color: #0FA2DD ;
    background-color: #ffffff;
}
.close{
  text-decoration: none;
  height: 100%;
  font-weight: 50px;
  font-size: 11px;
  color: black;
  background-color: #0FA2DD ;
  border-radius: 6px;
  border: 1px solid black;
  margin-left:230px;
  transition-duration: 0.3s;
 
}
.close:hover{
    color: #0FA2DD ;
    background-color: #ffffff;
}

h2{
    margin:0;
    margin-bottom: 1rem;
    font-size: 20px;
    }
p{
    font-size: 1em;
    margin-bottom:.5rem
}

`;
export default CountryStyled