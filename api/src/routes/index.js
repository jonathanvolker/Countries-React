const { Router } = require('express');
const fetch = require('node-fetch');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Country,Activity} = require('../db.js');


const router = Router();


const URL= 'https://restcountries.eu/rest/v2/all';

  
      

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.get("/countries", async(req, res) => {

  if(req.query.name){ 
    const {name}=req.query;
    const country = await Country.findAll({
      where:{
        name:name,
      }
  })
  console.log(name)
  res.json(country ||"pais no encontrado")}
  else{

    const response = await fetch(URL);
    const data = await response.json();
    const countries = data.map( async (l) => {
    const country = await Country.findOrCreate({ where: { 
                                                      ID:l.alpha3Code,
                                                      name:l.name,
                                                      flag:l.flag,
                                                      continent:l.region, 
                                                      capital:l.capital,
                                                      region:l.subregion,
                                                      population:l.population,
                                                      area :l.area +" km2"
                                                    } })
    
    });
    Promise.all(countries)
      .then(async () => {
        const allCountries = await Country.findAll();
        //console.log(allCountries)
        return allCountries;
        
      })
      .then((data) => res.json(data))
    }


})




router.post("/activity" , async(req, res) => {
{/*Recibe los datos recolectados desde el formulario
    controlado de la ruta de creación de actividad turística por body
    Crea una actividad turística en la base de datos */}
    const { name,dificultad, duracion,temporada} = req.body;
   
    try {
        const newActivity = await Activity.create({
        
          name,
          dificultad,
          duracion,
          temporada

          });
        res.json(newActivity);
        
        console.log("actividad")
      } catch (error) {
        res.send(error);
      }
      
   
})

module.exports = router;
