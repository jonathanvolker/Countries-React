import styled from 'styled-components';
const HomeStyled=styled.div`
 
  width: 100%;
  background: linear-gradient(90deg, rgba(136,148,240,1) 0%, rgba(106,120,227,1) 39%, rgba(55,71,191,1) 100%);
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  
 
 form{
     color:white;    
 }
 .container{
   width: 100vw;
   height: 7000px;
   background-image: url("https://i.ibb.co/cLKQFjK/Map-1000x500-1.jpg");  
    background-repeat: repeat-y repeat-x;
 }
 input {
   
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: .7em;
    outline: 0;
    color: var(--black);
    background: var(--white);
    &::-webkit-input-placeholder {
      color: #C4C4C4;
    }
  }
  header{
      align-items: center;
  }

`
 export default HomeStyled;