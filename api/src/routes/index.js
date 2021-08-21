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

    const response = await fetch(URL);
    const data = await response.json();
    const countries = data.map( async (l) => {
    const country = await Country.findOrCreate({ where: { ID:l.name,
                                                      name:l.name,
                                                      flag:l.flag,
                                                      continent:l.region, 
                                                      capital:l.capital,
                                                      region:l.subregion,
                                                      population:l.population } })
    
    });
    Promise.all(countries)
      .then(async () => {
        const allCountries = await Country.findAll();
        //console.log(allCountries)
        return allCountries;
        
      })
      .then((data) => res.json(data))
    


})

router.get("/countries/:ID",async(req, res) => {

    {/*Obtener el detalle de un país en particular
    Debe traer solo los datos pedidos en la ruta de detalle de país
    Incluir los datos de las actividades turísticas correspondientes */}
     const {ID}=req.params;
     const country = await Country.findByPk(ID)
     res.json(country||"pais no encontrado")
    
  
    
})

router.get("/countries/?name=",async (req, res) => {
    {/*Obtener los países que coincidan con el nombre pasado como
     query parameter (No necesariamente tiene que ser una matcheo exacto)
    Si no existe ningún país mostrar un mensaje adecuado
 */}
 /* const cName = await Country.query('SELECT FROM countries', {
  name: req.query.name,
  mapToModel: true
});console.log(cName)
   res.json(cName|| "pais no encontrado") */
   const {ID}=req.query;
   const country = await Country.findByPk(ID)
   res.json(country||"pais no encontrado")
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
