import styled from 'styled-components';
const HomeStyled=styled.div`
  background: #d7ebba;
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  
 form{
     color:white;    
 }
 .container{
   width: 100%;
   height: 2000px;
   
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