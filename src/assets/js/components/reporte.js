'use strict';
var json2csv = require('json2csv');
var fields = ['NOMBRES', 'PATERNO', 'MATERNO', 'SEXO', 'SMS_CONSENT', 'NRO_DOCUMENTO', 'CELULAR', 'EMAIL', 'PESO', 'EQUIPO_FUTBOL','TALLA','PROMESA','TIENE_HIJOS', 'NRO_HIJOS','ESTADO_CIVIL','NOMBRE_PAREJA', 'CELULAR_PAREJA','META_PESO','INDICADOR_PROGRESO','NOMBRE_EQUIPO'];
var fields2 = ['EMAIL','CELULAR', 'SMS_CONSENT'];

const Reporte = () => {
  const container = $('<section class="flex-center bg_reporte"></section>');
  const btn1 = $('<a class="waves-effect waves-light btn">Descargar BD</a><br>');
  const btn2 = $('<a class="waves-effect waves-light btn">Descargar SMS list</a>');
  var date = new Date();
  var fecha = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+"_"+date.getHours()+":"+date.getMinutes();
  CargarData().then((response)=>{
    console.log(response);
    generarCsv(response,fields,btn1,"BD");
    generarCsv(response,fields2,btn2,"smsList");
  });
  container.append(btn1,btn2);
  return container;
};