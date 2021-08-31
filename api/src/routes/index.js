const { Router } = require('express');
const fetch = require('node-fetch');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Country,Activity} = require('../db.js');


const router = Router();


const URL= 'https://restcountries.eu/rest/v2/all';

  
      

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.get("/coun", async(req, res)=>{
  const country = await Country.findAll()
  Promise.all(country)
  .then(data => res.json(data))
})

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
 try {
       const {ID} = req.params
       const name= ID.charAt(0).toUpperCase() + n.slice(1);
       console.log(name)
       const country = await Country.findByPk(name)
       res.json(country ||"pais no encontrado")
         
  }
 catch (error) {
    res.send("erros al buscar un pais")
  }
 
 })



router.get("/activities", async(req, res)=>{
try {
    const activities= await Activity.findAll();
      Promise.all(activities)
      .then(data => res.json(data))
 }
catch (error) {
  res.send("error al buscar todas las actividades") 
 }
})

router.post("/activities/all", async(req, res)=>{
    const{name} =req.body;
  
    const activity = await Activity.findAll({ 
      where:{name:name},
      include:Country
    })
   Promise.all(activity)
   .then(data => 
    res.json(data)
   )



})


router.post("/activity" , async(req, res) => {

  try {
    const {name,dificultad, duracion,temporada,countryName} = req.body;
    const newActivity = await Activity.create({
          name,
          dificultad,
          duracion,
          temporada
       });
    const country = await Country.findOne({
                    where:{name:countryName}
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
