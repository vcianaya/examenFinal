//obtenemos ruta en la que nos encontramos
var path = require("path");

//Se crea el modelo
var Sequelize = require("sequelize");

//Declaramos que haremos uso de sqlite
var sequelize= new Sequelize (null, null, null, {dialect:"sqlite", storage: "post.sqlite"});

//importamos la definicion de la tabla que se encuentra en agenda.js
var Posts =sequelize.import (path.join(__dirname,'post'));
exports.Posts =Posts; //se exporta la definicion

//sequelize.sync() crea e inicializa la tabla. 
sequelize.sync().success (function(){
	//success ejecuta un manager una vez creada la tabla
   Posts.count().success(function(count){
   	  //preguntamos si la tabla esta vacia
   	  if(count===0){
   	  	Posts.create({
   	  		nombres: "Ejemplo Nombre",
			   post: "Ejemplo post"				   
   	  		}).success(function(){
   	  			console.log("Posts inicializada")
   	  		})
   	  }
   })
})

