const initialState ={
    CountryList : [],
    moviesLoaded: [], //este estado es para las que se muestran al buscar
    movieDetail:{}// detalles de la peli buscada
    
    }
    
    function rootReducer(state = initialState, action) {
      
        if (action.type === "GET_COUNTRIES") {
            return {

              CountryList: action.payload
            };   //aca no me interesa guardar el estdo anterior 
        }          // dentro de .Search estan los datos de los paises del obj recibido de la api
        
         /*  if (action.type === "ADD_MOVIE_FAVORITE") {
            return {
              ...state, //obligado para que no se modifique el anterior
              MoviesFavorite: state.MoviesFavorite.concat(action.payload)
            }
        } */
        
       /*  if(action.type === "GET_MOVIES_DETAILS"){
    
            return{
                ...state,
                    movieDetail: action.payload
            }
    
        } */
       /*  if(action.type === "REMOVE_MOVIE_FAVORITE"){
            return{
                ...state,
                                                            //filtro y dejo todas las que sean dif a la recibida como action.payload
                moviesFavourites: state.moviesFavourites.filter(movie =>movie.imdbID !== action.payload)
              
            }
        } */
    
        return state;
      }
      
      export default rootReducer;