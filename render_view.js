function render (html, parametros){

  var html_string = html.toString();
  var variables = html_string.match(/[^\{\}]+(?=\})/g);
  var nombre = '';

  for (var i = 0; i < variables.length; i++) {
    //[nombre, apellido]
    var variable = variables[i];
     // parametros[variable]
     // parametros[nombre]
    html_string = html_string.replace("{"+variable+"}", parametros[variable]);
  }

  return html_string;
}

module.exports.render = render;
