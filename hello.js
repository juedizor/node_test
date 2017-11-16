var http = require ("http");  // http es un modulo que se encarga de servir aplicaciones web

// esta funcion se ejecuta cada vez que el navegador hace una peticion con node
var manejador = function(solicitud, respuesta){
  console.log("Hola mundo");
  respuesta.end("hola mundo");
};
/**
  la funcion recibe dos argumentos,
  la solicitud (request) y la segunda la respuesta (response)
*/

var servidor = http.createServer(manejador);
/**
  createServer es una funcion que recibe como parametro otra funcion,
  por tanto se crea la funcion manejador
 */

// se establece el puerto en donde va a escuhar
servidor.listen(8080);
