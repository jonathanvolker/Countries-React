const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey:true
      },
    name:{
        type: DataTypes.STRING,
    },
    dificultad:{
        type: DataTypes.STRING
    },
    duracion:{
        type: DataTypes.STRING
    },
    temporada:{
        type: DataTypes.ENUM('Verano','Otoño', 'Invierno', 'Primavera')
    }

  });
};
