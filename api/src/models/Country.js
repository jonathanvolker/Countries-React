const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    
    ID:{
      type: DataTypes.INTEGER,
      allowNull:false,
      unique:true,
      primaryKey:true,
      autoIncrement:true
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
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
    poblacion:{
      type: DataTypes.STRING,
    }

  });
};
