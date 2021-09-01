
import styled from "styled-components";


const CountryStyled =styled.div`

    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.802);
    background: linear-gradient(90deg, rgba(144,141,71,1) 20%, rgba(253,29,29,1) 100%, rgba(252,176,69,1) 100%);
    font-style: oblique;
    margin-top: 5%;
    box-shadow: 3px 3px #DC702E, -1em 0 0.4em #DC702E;
    margin-left: 50px;
    margin-bottom: 10px;
    border-radius: 15px;
    width: 350px;
    max-height: 800px;
img{
    margin-top: 1px;
    margin-right: 1px;
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
  background-color: #DC702E; ;
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
  //height: 100%;
  font-weight: 50px;
  font-size: 11px;
  color: black;
  background-color: #DC702E; ;
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