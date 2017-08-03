
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0kgAEyPWZV-m-GRSyFNHAI9Odtg3OrEs",
  authDomain: "retopower-265a9.firebaseapp.com",
  databaseURL: "https://retopower-265a9.firebaseio.com",
  projectId: "retopower-265a9",
  storageBucket: "",
  messagingSenderId: "456825737252"
};
firebase.initializeApp(config);

var id = "04128345";

var datos = {
  "NOMBRES": "Pedrito",
  "PATERNO": "Perez",
  "MATERNO": "Gonzales",
  "SEXO": "femenino",
  "FECHA_NACIMIENTO": "22/10/1992",
  "SMS_CONSENT": "OPTEN-IN",
  "NRO_DOCUMENTO": "04334343",
  "CELULAR": "5198475293",
  "EMAIL": "DSJD@SD.com",
  "PESO": "130",
  "EQUIPO_FUTBOL"  : "U",
  "TALLA" : "120",
  "PROMESA"  : "Quiero bajar por ...",
  "TIENE_HIJOS" : "Yes",
  "NRO_HIJOS": "2",
  "ESTADO_CIVIL" : "Casado",
  "NOMBRE_PAREJA" : "Pedro",
  "CELULAR_PAREJA"  : "99834328",
  "META_PESO"  : "75",
  "NOMBRE_EQUIPO"  : "LEALTAD",
  "PESO-1": "100",
  "PESO-2" :"103",
  "PESO-3" : "104",
  "PESO-4" : "101",
  "PESO-5" : "98",
  "PESO-6" : "97",
  "INDICADOR_PROGRESO" : "120"
};

firebase.database().ref('users/' + id).set(datos);

var state = {
  data : null,
  page: 0
};

  firebase.database().ref('/users/' + id).once('value').then(
    function(snapshot)  {
      state.data = snapshot.val();
      showData();
    });

function showData() {
  var container = $('<div class="container"></div>');
  var row = $('<div class="row"></div>');
  var col = $('<div  class="col s12 m6 offset-m3"></div>');
  var nombre = $('<div> Hola ' + state.data.NOMBRES + '</div>');
  var promesa = $('<div> " ' + state.data.PROMESA + '</div>');
  var pesoInicial = $('<div> Peso Inicial: ' + state.data.PESO + ' kg</div>');
  var pesoActual = $('<div> Peso Actual: ' + state.data.INDICADOR_PROGRESO + ' kg</div>');
  var pesoMeta = $('<div> Meta:' + state.data.META_PESO+ ' kg </div>');
  var queda =  state.data.INDICADOR_PROGRESO - state.data.META_PESO;
  var restante = $('<div> Te faltan: ' + queda + ' kg</div>');


  $(col).append(nombre);
  $(col).append(promesa);
  $(col).append(pesoInicial);
  $(col).append(pesoActual);
  $(col).append(pesoMeta);
  $(col).append(restante);
  $(row).append(col);
  $(container).append(row);
  $('body').append(container);
}

