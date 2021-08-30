

export const getCountries = () => 
 async(dispatch) =>{
    const response= await fetch("http://localhost:3001/countries")
    const data= await response.json();
    //console.log("data eng action",data)
    Promise.all(data)
       .then(obj => {
            dispatch({ type: "GET_COUNTRIES", payload: obj });
            console.log("listado de paises en action",obj)
      }
    );
}
 


export const getCountry = (n) => 
    //obtengo el obj de pais pero por id
    async(dispatch) =>{
        const name= n.charAt(0).toUpperCase() + n.slice(1);
        const response= await fetch("http://localhost:3001/countries?name="+name)
        const data= await response.json();
        //console.log("unico pais",data)
        Promise.all(data)
            .then(obj => {
                dispatch({ type: "GET_COUNTRY", payload: obj });
                console.log("UN SOLO PAIS",obj)
            }
        );
    }
 
export const getCountriesPerContinent = (continent) => 
 async(dispatch) =>{
    const response= await fetch("http://localhost:3001/countries")
    const data= await response.json();
    //console.log("data eng action",data)
    Promise.all(data)
       .then(obj => {

      const c= obj.filter(o=>
                o.continent === continent

        )//console.log(c)
            dispatch({ type: "GET_COUNTRIES_CONTINENT", payload: c });
            console.log("listado de continente desde actions",c)
      }
    );
}



