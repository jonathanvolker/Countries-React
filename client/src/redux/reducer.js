const initialState ={
    CountryList : [],
  
    Country:[] ,

    CountryContinent:[]
}
    
    function rootReducer(state = initialState, action) {
      
        if (action.type === "GET_COUNTRIES") {
            return {
               ...state,
              CountryList: action.payload
            };   
        }          
        
        
        if(action.type === "GET_COUNTRY"){
    
            return{...state,
                    Country: action.payload
            }
    
        }
       if(action.tipy === "GET_COUNTRIES_CONTINENT"){
           return {
               ...state,
                CountryContinent:action.payload
           }
       }
    
        return state;
      }
     
      export default rootReducer;