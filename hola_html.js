var http = require ("http"),
    fs = require ("fs");

// fs - dependencia para lectura de archivos

/**
 lectura del archivo html de manera sincrona,
 retornar el archivo
*/
//var html = fs.readFileSync("./index.html");

/**
  lectura del archivo de manera asincrona,
  no retorna nada, ningun valor
  node trata de leer el archivo, despues
  ejecuta la funcion.
*/
http.createServer(function(req, res){
  /**
    el archivo se lee cada vez que se realiza una peticio al servidor
    por tanto no es necesario bajar el server cada vez que se haga un cambio
    en el archivo index.html
  */
  fs.readFile("./index.html", function(err, html){

    /**
      response.writeHead,
      escribir los encabezados de la respuesta,
      encabezado y cuerpo,
      cuerpo vienen por lo general los parametros
      encabezado se puede saber, navegador de donde mandan la informacion, cual es la ip,
      En la respuesta tambien podemos mandar un cuerpo
      y tambien encabezados,
      codigo http, tipo de dato, si la
      comunicacione es con otras aplicaciones,
      datos de aut, claves - pass.

    */

    res.writeHead(200,
      {"Content-Type": "application/json"});
      res.write(JSON.stringify({nombre: "Julio", username: "juedizor"}))
    //res.write(html);
    /**
     escribe en la respuesta el archivo html,
     escribe pedazos de respuesta en el navegador
     */
    res.end(); // finaliza la respuesta, cierra la solicitud
  });
}).listen (8080);
