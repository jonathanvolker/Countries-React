


export const getCountries = () => 
 async(dispatch) =>{
    const response= await fetch("http://localhost:3001/countries")
    const data= await response.json();
    console.log("data eng action",data)
    Promise.all(data)
       .then(obj => {
            dispatch({ type: "GET_COUNTRIES", payload: obj });
            console.log("este es mi obj en action",obj)
      }
    );
}
       /*    async (dispatch) => {
      return  await fetch("http://localhost:3001/countries")
        .then(response => response.json())
        .then(obj => {
          dispatch({ type: "GET_COUNTRIES", payload: obj });
          console.log("este es mi obj en action",obj)
        });
    };  */

  

/*   //recibe una peli en obj
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  

 export function getMovieDetail(id){
        //obtengo el objd e pelis pero por id
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
          .then(response => response.json())
          .then(obj => {
            dispatch({ type: "GET_MOVIES_DETAILS", payload: obj });
          });
      };
 }

export function removeMovieFavorite(id){

    return {
        
        type: "REMOVE_MOVIE_FAVORITE",payload:id

    }
} */
