function parse (req){
  var arreglo_parametros = [], parametros = {};
  if(req.url.indexOf("?") > 0){
    var url_data = req.url.split("?");
    var arreglo_parametros = url_data[1].split("&");
  }

  for (var i = 0; i < arreglo_parametros.length; i++) {
    var parametro = arreglo_parametros[i];
    // nombre = julio
    var param_data = parametro.split("=");
    // [nombre, julio]
    parametros[param_data[0]] = param_data[1];
    //{nombre: julio}
  }

  return parametros;
}


module.exports.parse = parse;
