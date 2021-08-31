

export const getCountries = () => 
 async(dispatch) =>{
    const response= await fetch("http://localhost:3001/countries")
    const data= await response.json();
    //console.log("data eng action",data)
    Promise.all(data)
       .then(obj => {
            dispatch({ type: "GET_COUNTRIES", payload: obj });
           // console.log("listado de paises en action",obj)
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
                //console.log("UN SOLO PAIS",obj)
            }
        );
    }
 
 export const getActivities= () => 
 async(dispatch) =>{
    const response= await fetch("http://localhost:3001/activities")
    const data= await response.json();
    //console.log("data eng action",data)
    Promise.all(data)
       .then(obj => {
        const act = [];
            for(let i=0; i < obj.length; i++){
                act.push(obj[i].name)
            }
        
           

      dispatch({ type: "SET_ACTIVITY", payload: act});
            //console.log("listado activities desde actions",obj)
      }
    )
}
export const continentState = (continent)=>{
 return {
     type : "SET_CONTINENT",
     payload:continent
 }
}

export const findActivities=async(name)=>{
    const body=name;
        
    const response=  await fetch('http://localhost:3001/activities/all',{
    method: 'POST',
    headers:{ "Content-Type": "application/json"},
    body: JSON.stringify(name)
})
return{
    type:"ALL_ACTIVITIES",
    payload: response
}

} 



