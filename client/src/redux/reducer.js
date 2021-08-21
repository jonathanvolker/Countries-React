const initialState ={
    CountryList : [],
  
    CountryDetail:{}// detalles del pais buscado
    
    }
    
    function rootReducer(state = initialState, action) {
      
        if (action.type === "GET_COUNTRIES") {
            return {

              CountryList: action.payload
            };   
        }          
        
        
        if(action.type === "GET_COUNTRY"){
    
            return{
                ...state,
                    CountryDetail: action.payload
            }
    
        }
      
    
        return state;
      }
      
      export default rootReducer;