const { Router } = require('express');
const fetch = require('node-fetch');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {Country,Activity} = require('../db.js');


const router = Router();


const URL= 'https://restcountries.eu/rest/v2/all';


  
      

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/countries',async(req, res,next)=> {
       
async function lista(){ 
    
    await fetch(URL)
         .then((response) => {
                 return response.json()
                 })
         .then((list) => {
          
           const all = list.map(async (l) => {
           
               const newCountry = await Country.create({
                   name:l.name,
                   flag:l.flag,
                   continent:l.continent, 
                   capital:l.capital,
                   region:l.region,
                   population:l.population
                 }); 
                 return newCountry;
             }) 
             return all;
            }
         ).then(res.json(all))
         .catch(() => {
         console.log('falla request')
         })
    
       } 
       lista()
})



router.get("/countries", async(req, res) => {
{/*En una primera instancia deberán traer todos los países desde restcountries 
    y guardarlos en su propia base de datos y luego ya utilizarlos desde allí 
    (Debe almacenar solo los datos necesarios para la ruta principal)
    Obtener un listado de los paises. */}
   
    
         fetch(URL)
             .then((response) => {
                     return response.json()
              })
             .then((list) => {
               const all = list.map(async (l) => {
                const newCountry = await Country.create({
                       name:l.name,
                       flag:l.flag,
                       continent:l.continent, 
                       capital:l.capital,
                       region:l.region,
                       population:l.population
                    
                    });  console.log(newCountry)
                return newCountry;
                 }) 
              return all;
                }
             ).then((all)=>{res.json(all)} )
             .catch(() => {
             console.log('falla request')
             })
        
           
         

  /*  try {
    
    
        const allCoutries = await Country.findAll();
        res.json(allCoutries);
    } catch (error) {
        console.error(error.message);
    }
    */

})

router.get("/countries/ID",(req, res) => {

    {/*Obtener el detalle de un país en particular
    Debe traer solo los datos pedidos en la ruta de detalle de país
    Incluir los datos de las actividades turísticas correspondientes */}

})

router.get("/countries?name",(req, res) => {
    {/*Obtener los países que coincidan con el nombre pasado como
     query parameter (No necesariamente tiene que ser una matcheo exacto)
    Si no existe ningún país mostrar un mensaje adecuado
 */}
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
