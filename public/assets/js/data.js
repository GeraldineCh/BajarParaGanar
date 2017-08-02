/*
var data = [["name", "lastname", "city"], ["Sandra", "Perez", "Lima"]];
var csvContent = "data:text/csv;charset=utf-8,";
data.forEach(function(infoArray, index){

  dataString = infoArray.join(";");
  csvContent += index < data.length ? dataString+ "\n" : dataString;

});

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data1.csv");
document.body.appendChild(link);
link.click();

*/

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

var myCars = {
  "NOMBRES": "Nely",
  "PATERNO": "Perez",
  "MATERNO": "Gonzales",
  "SEXO": "femenino",
  "FECHA_NACIMIENTO": "22/10/1992",
  "SMS_CONSENT": "OPTEN-IN",
  "NRO_DOCUMENTO": "04334343",
  "CELULAR": "5198475293",
  "EMAIL": "DSJD@SD.com",
  "PESO": "130",
  "APORTA_EQUIPO_FUTBOL"  : "U",
  "TALLA" : "120",
  "APORTA_PROMESA"  : "Quiero bajar por ...",
  "TIENE_HIJOS" : "Yes",
  "NRO_HIJOS": "2",
  "ESTADO CIVIL" : "Casado",
  "NOMBRE_PAREJA" : "Pedro",
  "CELULAR_PAREJA"  : "99834328",
  "APORTA_META_PESO"  : "75",
  "APORTA_NOMBRE_EQUIPO"  : "LEALTAD",
  "PESO1": "100",
  "PESO2" :"103",
  "PESO3" : "104",
  "PESO4" : "101",
  "PESO5" : "98",
  "PESO6" : "95"
};
firebase.database().ref('users/' + id).set(myCars);

var state = {
  data : null,
  page: 0
};

  firebase.database().ref('/users/' +id).once('value').then(
    function(snapshot)  {
      state.data = snapshot.val();
      addConsole();
    });

function addConsole() {
  console.log(state.data);
}

