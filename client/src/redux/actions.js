

export const getCountries = () => 
 async(dispatch) =>{
    const response= await fetch("http://localhost:3001/countries")
    const data= await response.json();
    //console.log("data eng action",data)
    Promise.all(data)
       .then(obj => {
            dispatch({ type: "GET_COUNTRIES", payload: obj });
            //console.log("este es mi obj en action",obj)
      }
    );
}
 


export const getCountry = (n) => 
        //obtengo el obj de pais pero por id
        async(dispatch) =>{
            const response= await fetch("http://localhost:3001/countries?name="+n)
            const data= await response.json();
            //console.log("unico pais",data)
            Promise.all(data)
               .then(obj => {
                    dispatch({ type: "GET_COUNTRY", payload: obj });
                   // console.log("UN SOLO PAIS",obj)
              }
        );
    }
 