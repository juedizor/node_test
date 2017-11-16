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


    var nombre = "Julio"; // variable
    var html_string = html.toString(); //
    // expresion regular que busca en el html donde haya {x}
    var variables = html_string.match(/[^\{\}]+(?=\})/g);

    // variables ['nombre']
    for (var i = 0; i < variables.length; i++) {
      // lo ejecutamos como codigo javascript
      // para obtener el valor de dicha variable
      var value = eval(variables[i]);
      // reemplazamos el contenido con llaves con su valor correspondiente
      html_string = html_string.replace("{"+variables[i]+"}", value);
    }



    res.writeHead(200,
      {"Content-Type": "text/html"});
    //  res.write(JSON.stringify({nombre: "Julio", username: "juedizor"}))
    res.write(html_string);
    /**
     escribe en la respuesta el archivo html,
     escribe pedazos de respuesta en el navegador
     */
    res.end(); // finaliza la respuesta, cierra la solicitud
  });
}).listen (8080);
