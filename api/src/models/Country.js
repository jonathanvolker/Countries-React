const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    
    ID:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
      
    },

    flag:{
      type: DataTypes.STRING,
      allowNull:true, 
      
     
    },
    continent: {
      type: DataTypes.STRING,
      allowNull:true, 
      
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:true

    },
    subregion:{
      type:DataTypes.STRING,

    },
    population:{
      type: DataTypes.INTEGER,
    },
    area:{
      type:DataTypes.STRING
    }

  },{timestamp:false});
};
