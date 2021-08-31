const initialState ={
    Countries : [],
      Continent:"",
      Activities:[],
      AllActivities:[]
}
    
    function rootReducer(state = initialState, action) {
      
        if (action.type === "GET_COUNTRIES") {
            return {
                ...state,
              Countries: action.payload
            };   
        }          
        
        
        if(action.type === "GET_COUNTRY"){
    
            return{
                    ...state,
                    Countries: [action.payload]
            }
    
        }
       if(action.type === "SET_CONTINENT"){
           return {
               ...state,
                Continent:action.payload
           }
       }
       if(action.type === "SET_ACTIVITY"){
        return {
            ...state,
            Activities:action.payload
        }
    }
    if(action.type === "ALL_ACTIVITIES"){
        return {
            ...state,
            Activities:action.payload
        }
    }
        return state;
      }
     
      export default rootReducer;