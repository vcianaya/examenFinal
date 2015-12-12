//Escriba la estructura de la tabla dentro de las llaves
module.exports= function(sequelize, DataTypes){ 

return sequelize.define('Contacto', {nombres: DataTypes.STRING, 

   apellidoPaterno: DataTypes.STRING, 

   apellidoMaterno: DataTypes.STRING

   });