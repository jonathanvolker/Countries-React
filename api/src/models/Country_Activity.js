const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country_Activity', {
     
    iD:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true, 
   }  

  },{
   
    timestamps:false
  }
  );
};