// var json2csv = require('json2csv');
// var fields = ['NOMBRES', 'SEXO', 'MATERNO', 'PATERNO', 'FECHA_NACIMIENTO', 'SMS', 'NRO_DOCUMENTO', 'CELULAR_SMS', 'EMAIL', 'pesos'];
var config = {
  apiKey: "AIzaSyC0kgAEyPWZV-m-GRSyFNHAI9Odtg3OrEs",
  authDomain: "retopower-265a9.firebaseapp.com",
  databaseURL: "https://retopower-265a9.firebaseio.com",
  projectId: "retopower-265a9",
  storageBucket: "",
  messagingSenderId: "456825737252"
};
firebase.initializeApp(config);


const getUsers = () => {
    return firebase.database().ref('/users/04128345').once('value').then((snapshot) => {
          return snapshot.val();
    });
};
const CargarData = () => {
  return new Promise((resolve,reject) => {
    resolve(getUsers());
  });
};

const generarCsv = (json,fields2,btn,archivo) =>{
  var date = new Date();
  var fecha = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+"_"+date.getHours()+":"+date.getMinutes();
  json2csv({ data: json, fields: fields2}, function(err, csv) {
    if (err) console.log(err);
    var array = "data:text/csv;charset=utf-8,";
    array += csv.split(',').join(";");
    var encodedUri = encodeURI(array);
    btn.attr("href", encodedUri);
    btn.attr("download", archivo+"/"+fecha+".csv");
    btn.click();
  });
}
const setUser = (data,dni) => {
  firebase.database().ref('users/' + dni).set(data);
}
