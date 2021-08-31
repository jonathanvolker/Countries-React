const { Router } = require('express');
const fetch = require('node-fetch');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Country,Activity} = require('../db.js');


const router = Router();


const URL= 'https://restcountries.eu/rest/v2/all';
const URLname="https://restcountries.eu/rest/v2/name/"
  
      

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.get("/countries", async(req, res) => {
 try{
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
                                                      subregion:l.subregion,
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
     } }
      catch (error) {
       res.send("error al buscar paises", error)
     }
    
})

router.get("/countries/:ID", async(req, res) => {
 const {ID} = req.params
 const country = await Country.findByPk(ID)
 res.json(country ||"pais no encontrado")

})



router.get("/activities", async(req, res)=>{
 const activities= await Activity.findAll();

 Promise.all(activities)
 .then(data => res.json(data))
 
})

router.post("/activity/all", async(req, res)=>{
  const{ name} =req.body;
  
  const activity = await Activity.findAll({ 
    where:{name:name},
    include:Country
  
  },
    console.log(name)
  )

 res.json(activity)

})


router.post("/activity" , async(req, res) => {
{/*Recibe los datos recolectados desde el formulario
    controlado de la ruta de creación de actividad turística por body
    Crea una actividad turística en la base de datos */}
    const {name,dificultad, duracion,temporada,countryName} = req.body;
   
    try {
       
        const newActivity = await Activity.create({
        
          name,
          dificultad,
          duracion,
          temporada

          });
        const country = await Country.findOne({
                    where:{
                      name:countryName
                    }
        })

        newActivity.addCountry(country)
             res.send("success ok")
        //console.log("actividad")
      } 
      catch (error) {
        res.send(error);
      }
      
   
})

module.exports = router;
