(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    return firebase.database().ref('/users/').once('value').then((snapshot) => {
          return snapshot.val();
    });
};
const CargarData = () => {
  return new Promise((resolve,reject) => {
    resolve(getUsers());
  });
};

const generarCsv = (json,encabezado,btn,archivo) =>{
  var date = new Date();
  var fecha = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+"_"+date.getHours()+":"+date.getMinutes();
  var json1 = [];
  $.each(json, function (key, data) {
    json1.push(data);
})
  json2csv({ data: json1, fields: encabezado}, function(err, csv) {
    if (err) console.log(err);
    var array = "data:text/csv;charset=utf-8,";
    array += csv.split(',').join(";");
    var encodedUri = encodeURI(array);
    btn.attr("href", encodedUri);
    btn.attr("download", archivo+"/"+fecha+".csv");
    btn.click();
  });
}

const newUser = (dni,dato) => {
  firebase.database().ref('users/' + dni).set(dato);
};



const CivilState = () => {
  const civilState = $('<div class="carousel-item"></div>');
  const civilState1 = $('<p>Estado civil </p>');
  const civilState2 = $('<select id="civilState" style="display: block"></select>');
  const civilState3 = $('<option value="" disabled selected>Seleccione</option>');
  const civilState4 = $('<option value="1">Soltero</option>');
  const civilState5 = $('<option value="2">Casado</option>');
  const civilState6 = $('<option value="3">Conviviente</option>');
  const civilState7 = $('<option value="4">Vuido</option>');
  const civilState8 = $('<option value="5">Divorciado</option>');

  civilState.append(civilState1);
  civilState.append(civilState2);
  civilState2.append(civilState3);
  civilState2.append(civilState4);
  civilState2.append(civilState5);
  civilState2.append(civilState6);
  civilState2.append(civilState7);
  civilState2.append(civilState8);
  return civilState;
}

const Wife = () => {
  const wife = $('<div class="input-field col s12 carousel-item"></div>');
  const wife1 = $('<label for="wife">Nombre de esposa/conviviente/pareja: </label>');
  const wife2 = $('<input id="nameWife" type="text" class="validate">');

  wife.append(wife1);
  wife.append(wife2);
  return wife;
}

const Cell = () => {
  const cell = $('<div class="input-field col s12 carousel-item"></div>');
  const cell1 = $('<label for="wife">Celular de la pareja: </label>');
  const cell2 = $('<input id="phoneWife" type="text" class="validate">');

  cell.append(cell1);
  cell.append(cell2);
  return cell;
}

const Children = () => {
  const children = $('<div class="carousel-item"></div>');
  const children1 = $('<label>¿Tiene hijos?</label>');
  const children2 = $('<input name="group6" type="radio" id="childrenSi"/><label for="childrenSi">Sí</label>');
  const children3 = $('<input name="group6" type="radio" id="childrenNo"/><label for="childrenNo">No</label>');

  children.append(children1);
  children.append(children2);
  children.append(children3);
  return children;
}

const NumChildren = () => {
  const numChildren = $('<div class="input-field col s12 carousel-item"></div>');
  const numChildren1 = $('<label for="numChildren">Número de hijos: </label>');
  const numChildren2 = $('<input id="numChildren" type="text" class="validate">');

  numChildren.append(numChildren1);
  numChildren.append(numChildren2);
  return numChildren;
}

const NameChildren = () => {
  const nameChildren = $('<div class="input-field col s12 carousel-item"></div>');
  const nameChildren1 = $('<label for="nameChildren">Nombre de hijos: </label>');
  const nameChildren2 = $('<input id="nameChildren" type="text" class="validate">');

  nameChildren.append(nameChildren1);
  nameChildren.append(nameChildren2);
  return nameChildren;
}

const AgeChildren = () => {
  const ageChildren = $('<div class="input-field col s12 carousel-item"></div>');
  const ageChildren1 = $('<label for="ageChildren">Edad de los hijos: </label>');
  const ageChildren2 = $('<input id="ageChildren" type="text" class="validate">');

  ageChildren.append(ageChildren1);
  ageChildren.append(ageChildren2);
  return ageChildren;
}


'use strict';
const Qpromise = () => {
  const promise = $('<div class="input-field col s12 carousel-item"></div>');
  const promise1 = $('<label for="promise">Promesa personal: </label>');
  const promise2 = $('<textarea id="promise" class="materialize-textarea" data-length="120"></textarea>');

  promise.append(promise1);
  promise.append(promise2);
  return promise;
}

const InscriptionCode = () => {
  const inscriptionCode = $('<div class="input-field col s12 carousel-item"></div>');
  const inscriptionCode1 = $('<label for="inscriptionCode">Código de inscripción: </label>');
  const inscriptionCode2 = $('<input id="inscriptionCode" type="text" class="validate">');

  inscriptionCode.append(inscriptionCode1);
  inscriptionCode.append(inscriptionCode2);
  return inscriptionCode;
}

const FootballTeam = () => {
  const footballTeam = $('<div class="carousel-item"></div>');
  const footballTeam1 = $('<p>Equipo de fútbol: </p>');
  const footballTeam2 = $('<select id="footballTeam" style="display: block"></select>');
  const footballTeam3 = $('<option value="" disabled selected>Seleccione</option>');
  const footballTeam4 = $('<option value="1">Universitario de Deportes</option>');
  const footballTeam5 = $('<option value="2">Alianza Lima</option>');
  const footballTeam6 = $('<option value="3">Sporting Cristal</option>');
  const footballTeam7 = $('<option value="4">Melgar</option>');
  const footballTeam8 = $('<option value="5">Cienciano</option>');
  const footballTeam9 = $('<option value="6">Sport Boys</option>');
  const footballTeam10 = $('<option value="7">Otro</option>');

  footballTeam.append(footballTeam1);
  footballTeam.append(footballTeam2);
  footballTeam2.append(footballTeam3);
  footballTeam2.append(footballTeam4);
  footballTeam2.append(footballTeam5);
  footballTeam2.append(footballTeam6);
  footballTeam2.append(footballTeam7);
  footballTeam2.append(footballTeam8);
  footballTeam2.append(footballTeam9);
  footballTeam2.append(footballTeam10);
  return footballTeam;
}

const Insurance = () => {
  const insurance = $('<div class="carousel-item"></div>');
  const insurance1 = $('<p>¿Está asegurado?</p>');
  const insurance2 = $('<input name="group8" type="radio" id="insuranceSi"/><label for="insuranceSi">Sí</label>');
  const insurance3 = $('<input name="group8" type="radio" id="insuranceNo"/><label for="insuranceNo">No</label>');

  insurance.append(insurance1);
  insurance.append(insurance2);
  insurance.append(insurance3);
  return insurance;
}

const InsuranceType = () => {
  const insuranceType = $('<div class="carousel-item"></div>');
  const insuranceType1 = $('<p>Tipo de seguro: </p>');
  const insuranceType2 = $('<select id="insuranceType" style="display: block" multiple></select>');
  const insuranceType3 = $('<option value="" disabled selected>Seleccione</option>');
  const insuranceType4 = $('<option value="1">Salud</option>');
  const insuranceType5 = $('<option value="2">EPS</option>');
  const insuranceType6 = $('<option value="3">Vida</option>');
  const insuranceType7 = $('<option value="4">SCTR</option>');
  const insuranceType8 = $('<option value="5">Vehicular</option>');

  insuranceType.append(insuranceType1);
  insuranceType.append(insuranceType2);
  insuranceType2.append(insuranceType3);
  insuranceType2.append(insuranceType4);
  insuranceType2.append(insuranceType5);
  insuranceType2.append(insuranceType6);
  insuranceType2.append(insuranceType7);
  insuranceType2.append(insuranceType8);
  return insuranceType;
}

const InsuranceCia = () => {
  const insuranceCia = $('<div class="carousel-item"></div>');
  const insuranceCia1 = $('<p>Compañía con la cual está asegurado: </p>');
  const insuranceCia2 = $('<select id="insuranceCia" style="display: block"></select>');
  const insuranceCia3 = $('<option value="" disabled selected>Seleccione</option>');
  const insuranceCia4 = $('<option value="1">Rimac</option>');
  const insuranceCia5 = $('<option value="2">Pacífico</option>');
  const insuranceCia6 = $('<option value="3">Mapfre</option>');
  const insuranceCia7 = $('<option value="4">Interseguro</option>');
  const insuranceCia8 = $('<option value="5">La Positiva</option>');
  const insuranceCia9 = $('<option value="6">EsSalud</option>');
  const insuranceCia10 = $('<option value="7">No sabe</option>');

  insuranceCia.append(insuranceCia1);
  insuranceCia.append(insuranceCia2);
  insuranceCia2.append(insuranceCia3);
  insuranceCia2.append(insuranceCia4);
  insuranceCia2.append(insuranceCia5);
  insuranceCia2.append(insuranceCia6);
  insuranceCia2.append(insuranceCia7);
  insuranceCia2.append(insuranceCia8);
  insuranceCia2.append(insuranceCia9);
  insuranceCia2.append(insuranceCia10);
  return insuranceCia;
}

const TeamName = () => {
  const teamName = $('<div class="input-field col s12 carousel-item"></div>');
  const teamName1 = $('<label for="teamName">Nombre del equipo con el que perderá peso: </label>');
  const teamName2 = $('<input id="teamName" type="text" class="validate">');

  teamName.append(teamName1);
  teamName.append(teamName2);

  return teamName;
}
'use strict';

const Perfil = (update) => {
  console.log(state.user.NRO_DOCUMENTO);
  const section = $('<section class="perfil__bg"><img src="assets/img/logo-white.png" alt="" class="logo-white"></section>');
  const header = $('<div class="deep-purple lighten-1 white-text perfil">Perfil</div>');
  const name = $('<br><h3> Hola '+state.user.NOMBRES+'<h3>');
  const promesa = $('<br><div class="row"><h5 class="z-depth-1 col s12 m6 offset-m3" style="padding: 20px"><i>'+state.user.PROMESA+'</i><h5></div>');
  const rowPeso = $('<div class="perfi_peso"></div>');
  const pesoActual = $('<h5>"'+state.user.INDICADOR_PROGRESO+'"<h5>');
  const pesoMeta = $('<h5> "'+state.user.META_PESO+'"<h5>');
  rowPeso.append(pesoActual,pesoMeta);

  const btnUpdate = $('<button data-target="modal1" class="btn modal-trigger">Actualizar Peso</button>');
// <button data-target="modal1" class="btn modal-trigger">Modal</button>

  const container = $('<div id="welcome" class="container center"></div>');

  const rowBtn = $('<div class="welcome_btn contentButton row"></div>');
  const rowBtn1 = $('<div class="welcome_btn contentButton row"></div>');

  const btnSignUp = $('<button type="button" class="btn-welcome yellow waves-effect waves-light btn-large" name="button">Sign up</button>');
  const btnLogIn = $('<button type="button" class="btn-welcome yellow waves-effect waves-light btn-large" name="button">Log in</button>');
  container.append(name,promesa,rowPeso,btnUpdate);
  section.append(header);
  section.append(container);

  btnUpdate.on('click',(e) => {
    e.preventDefault();
    $('#modal1').modal();
    $('#newPeso').on({
      keypress: ValidateNumber,
    });
    $('#btnListo').on('click',(e)=>{
      console.log($('#newPeso').val());
      if($('#newPeso').val() != ""){
        updatePeso(state.user.NRO_DOCUMENTO,$('#newPeso').val());
        $('#newPeso').val('');
      }
    });
  });

  return section;
}

const Weight = () => {
  const weight = $('<div class="input-field carousel-item col s12"></div>');
  const weight1 = $('<label for="weightInit">Peso: </label>');
  const weight2 = $('<input id="weightInit" type="text" class="validate">');
  const weight3 = $('<span><br>*Mínimo 40kg, máx. 200kg.</span>');

  weight.append(weight1);
  weight.append(weight2);
  weight.append(weight3);
  return weight;
};

const Height = () => {
  const height = $('<div class="input-field col s12 carousel-item"></div>');
  const height1 = $('<label for="height">Talla: </label>');
  const height2 = $('<input id="height" type="text" class="validate">');
  const height3 = $('<span><br>*Mínimo 50cm, máx. 250cm</span>');

  height.append(height1);
  height.append(height2);
  height.append(height3);
  return height;
};

const Goal = () => {
  const goal = $('<div class="input-field col s12 carousel-item"></div>');
  const goal1 = $('<label for="goal">Meta de peso: </label>');
  const goal2 = $('<input disabled id="goal" type="text" class="validate">');

  goal.append(goal1);
  goal.append(goal2);
  return goal;
}

const Smoke = () => {
  const smoke = $('<div class="carousel-item"></div>');
  const smoke1 = $('<p>¿Fuma?</p>');
  const smoke2 = $('<input name="group1" type="radio" id="smokeSi"><label for="smokeSi">Sí</label>');
  const smoke3 = $('<input name="group1" type="radio" id="smokeNo"><label for="smokeNo">No</label>');

  smoke.append(smoke1);
  smoke.append(smoke2);
  smoke.append(smoke3);
  return smoke;
}

const Cantidad = () => {
  const cantidad = $('<div class="carousel-item"></div>');
  const cantidad1 = $('<label for="frecuencia">¿Con qué frecuencia fuma? </label>');
  const cantidad2 = $('<select id="frecuencia" style="display: block"></select>');
  const cantidad3 = $('<option value="" disabled selected>Seleccione</option>');
  const cantidad4 = $('<option value="1">Diario</option>');
  const cantidad5 = $('<option value="2">Interdiario</option>');
  const cantidad6 = $('<option value="3">Semanal</option>');
  const cantidad7 = $('<option value="4">Quincenal</option>');
  const cantidad8 = $('<option value="5">Mensual</option>');
  const cantidad9 = $('<option value="6">Menos que una vez al mes</option>');

  cantidad.append(cantidad1);
  cantidad.append(cantidad2);
  cantidad2.append(cantidad3);
  cantidad2.append(cantidad4);
  cantidad2.append(cantidad5);
  cantidad2.append(cantidad6);
  cantidad2.append(cantidad7);
  cantidad2.append(cantidad8);
  cantidad2.append(cantidad9);
  return cantidad;
}

const Sleep = () => {
  const sleep = $('<div class="carousel-item"></div>');
  const sleep1 = $('<label for="sleep">Horas de sueño </label>');
  const sleep2 = $('<select id="sleep" style="display: block"></select>');
  const sleep3 = $('<option value="" disabled selected>Seleccione</option>');
  const sleep4 = $('<option value="1">Menos de 5 horas</option>');
  const sleep5 = $('<option value="2">5 horas</option>');
  const sleep6 = $('<option value="3">6 horas</option>');
  const sleep7 = $('<option value="4">7 horas</option>');
  const sleep8 = $('<option value="5">8 horas</option>');
  const sleep9 = $('<option value="6">Más de 8 horas</option>');

  sleep.append(sleep1);
  sleep.append(sleep2);
  sleep2.append(sleep3);
  sleep2.append(sleep4);
  sleep2.append(sleep5);
  sleep2.append(sleep6);
  sleep2.append(sleep7);
  sleep2.append(sleep8);
  sleep2.append(sleep9);
  return sleep;
}

const Activity = () => {
  const activity = $('<div class="carousel-item"></div>');
  const activity1 = $('<p>¿Actividad física al menos 10 min diarios?</p>');
  const activity2 = $('<input name="group4" type="radio" id="activityYes"/><label for="activityYes">Sí</label>');
  const activity3 = $('<input name="group4" type="radio" id="activityNo"/><label for="activityNo">No</label>');

  activity.append(activity1);
  activity.append(activity2);
  activity.append(activity3);
  return activity;
}

const Pactivity = () => {
  const pactivity = $('<div class="carousel-item"></div>');
  const pactivity1 = $('<p>¿Actividad física al menos 30 min 5 días a la semana?</p>');
  const pactivity2 = $('<input name="group5" type="radio" id="pactivityYes"/><label for="pactivityYes">Sí</label>');
  const pactivity3 = $('<input name="group5" type="radio" id="pativityNo"/><label for="pativityNo">No</label>');

  pactivity.append(pactivity1);
  pactivity.append(pactivity2);
  pactivity.append(pactivity3);
  return pactivity;
}

const Drink = () => {
  const drink = $('<div class="carousel-item"></div>');
  const drink1 = $('<p>¿Toma?</label>');
  const drink2 = $('<input name="group6" type="radio" id="drinkYes"/><label for="drinkYes">Sí</label>');
  const drink3 = $('<input name="group6" type="radio" id="drinkNo"/><label for="drinkNo">No</label>');

  drink.append(drink1);
  drink.append(drink2);
  drink.append(drink3);
  return drink;
}

const Dcant = () => {
  const dcant = $('<div class="carousel-item"></div>');
  const dcant1 = $('<label for="dcant">¿Con qué frecuencia toma? </label>');
  const dcant2 = $('<select id= "dcant" style="display: block"></select>');
  const dcant3 = $('<option value="" disabled selected>Seleccione</option>');
  const dcant4 = $('<option value="1">Diario</option>');
  const dcant5 = $('<option value="2">Interdiario</option>');
  const dcant6 = $('<option value="3">Semanal</option>');
  const dcant7 = $('<option value="4">Quincenal</option>');
  const dcant8 = $('<option value="5">Mensual</option>');
  const dcant9 = $('<option value="6">Menos que una vez al mes</option>');

  dcant.append(dcant1);
  dcant.append(dcant2);
  dcant2.append(dcant3);
  dcant2.append(dcant4);
  dcant2.append(dcant5);
  dcant2.append(dcant6);
  dcant2.append(dcant7);
  dcant2.append(dcant8);
  dcant2.append(dcant9);
  return dcant;
}

const Shots = () => {
  const shots = $('<div class="carousel-item"></div>');
  const shots1 = $('<p>¿Cuántos vasos?</p>');
  const shots2 = $('<select style="display: block"></select>');
  const shots3 = $('<option value="" disabled selected>Seleccione</option>');
  const shots4 = $('<option value="1">1</option>');
  const shots5 = $('<option value="2">2</option>');
  const shots6 = $('<option value="3">3</option>');
  const shots7 = $('<option value="4">4</option>');
  const shots8 = $('<option value="5">Más de 4</option>');

  shots.append(shots1);
  shots.append(shots2);
  shots2.append(shots3);
  shots2.append(shots4);
  shots2.append(shots5);
  shots2.append(shots6);
  shots2.append(shots7);
  shots2.append(shots8);
  return shots;
}
'use strict';
const User = (letters) => {

  const container = $('<div></div>');
  const form = $('<form class="carousel carousel-slider center" style="height: 90vh"><div class="carousel-fixed-item center "></div></form>');
  const btnSave = $('<a class="btn waves-effect white grey-text darken-text-2" id="btnSave">GUARDAR</a>');
  const name = $('<div class="carousel-item" href="one"><label for="js_input_name">Nombre</label><input id="js_input_name" type="text"></div>');
  const lastName1 = $('<div class="carousel-item" href="two"><label for="js_input_lname_1">Apellido Paterno</label><input id="js_input_lname_1" type="text"></div>');
  const lastName2 = $('<div class="carousel-item" href="three"><label for="js_input_lname_2">Apellido Materno</label><input id="js_input_lname_2" type="text"></div>');
  const genre = $('<div class="carousel-item" href="four"><select style="display: block" id="genre"><option value="" disabled selected>Género</option><option value="F">Femenino</option><option value="M">Masculino</option><option value="Otro">Otro</option></select></div>');
  const date = $('<div class="carousel-item" href="five"><input type="text" class="timepicker" id="dateBirth"></div>'); // Input calendario
  const consSms = $('<div class="carousel-item" href="six"><input name="sms" type="radio" id="smsYes" value="OPTEN-IN"/><label for="smsYes">Sí, deseo recibir consejos y mensajes que mejoren mi estilo de vida</label><input name="sms" type="radio" id="smsNo"/><label for="smsNo">No, no deseo participar.</label></div>');
  const dni = $('<div class="carousel-item" href="seven"><label for="js_input_dni">DNI</label><input id="js_input_dni" type="text"></div>');
  const mobile = $('<div class="carousel-item" href="8"><label for="js_input_mobile">Celular</label><input id="js_input_mobile" type="text"></div>');
  const email = $('<div class="carousel-item" href="9"><label for="js_input_email">Email</label><input id="js_input_email" type="email" class="validate"></div>');
  const footer = $('<div class="footer deep-orange accent-3 right-align" style="height: 10vh;">');
  const btnPrev = $('<button class="right-align"><</button>');
  const btnNext = $('<button class="right-align">></button>');

  form.append(name);
  form.append(lastName1);
  form.append(lastName2);
  form.append(genre);
  form.append(date);
  form.append(consSms);
  form.append(dni);
  form.append(mobile);
  form.append(email);
  form.append(Weight);
  form.append(Height);
  form.append(Goal);
  form.append(Smoke);
  form.append(Cantidad);
  form.append(Sleep);
  form.append(Activity);
  form.append(Pactivity);
  form.append(Drink);
  form.append(Dcant);
  form.append(Shots);
  form.append(CivilState);
  form.append(Wife);
  form.append(Cell);
  form.append(Children);
  form.append(NumChildren);
  form.append(NameChildren);
  form.append(AgeChildren);
  form.append(Qpromise);
  form.append(InscriptionCode);
  form.append(FootballTeam);
  form.append(Insurance);
  form.append(InsuranceType);
  form.append(InsuranceCia);
  form.append(TeamName);

  container.append(form);
  footer.append(btnPrev);
  footer.append(btnNext);
  footer.append(btnSave);
  container.append(footer);
  btnPrev.click(function () {
    $('.carousel').carousel('prev');
  });

  btnNext.click(function () {
    $('.carousel').carousel('next');
  });

  function letters(input) {
    input.last().on('keypress', (e) => {
      let codigoTecla = e.keyCode;
    if((codigoTecla >= 97 && codigoTecla <= 122) ||
      (codigoTecla >= 65 && codigoTecla <= 90) ||
      (codigoTecla == 32) || (codigoTecla == 39)) {

      $('#error').text("");
      return true
    } else {
      $('#error').text("error");
      return false
    }
  });
  }
  letters(name);
  letters(lastName1);
  letters(lastName2);


  btnSave.click(function (e) {
    e.preventDefault();
    state.selectUser.NOMBRES = $('#js_input_name').val();
    state.selectUser.PATERNO = $('#js_input_lname_1').val();
    state.selectUser.MATERNO = $('#js_input_lname_2').val();
    state.selectUser.NRO_DOCUMENTO = $('#js_input_dni').val();
    state.selectUser.SEXO = $('#genre').val();
    state.selectUser.FECHA_NACIMIENTO = $('#dateBirth').val();
    state.selectUser.SMS_CONSENT = $('#smsYes').val();
    state.selectUser.EMAIL = $('#js_input_email').val();
    state.selectUser.CELULAR = $('#js_input_mobile').val();

    state.selectUser.PESO = $('#weightInit').val();
    state.selectUser.TALLA = $('#height').val();
    state.selectUser.META_PESO = $('#goal').val();

    state.selectUser.CELULAR_PAREJA = $('#phoneWife').val();
    state.selectUser.ESTADO_CIVIL = $('#civilState').val();
    state.selectUser.TIENE_HIJOS = $('input[type=radio]').val();
    state.selectUser.NOMBRE_PAREJA = $('#nameWife').val();
    state.selectUser.NRO_HIJOS = $('#numChildren').val();

    state.selectUser.PROMESA = $('#promise').val();
    state.selectUser.INDICADOR_PROGRESO = 0;
    state.selectUser.NOMBRE_EQUIPO = $('#teamName').val();
    state.selectUser.EQUIPO_FUTBOL = $('#footballTeam').val();
    console.log(state.selectUser);

    newUser(state.selectUser.NRO_DOCUMENTO, state.selectUser);
  });

  return container;
};

'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch(state.page) {
    case 0:
      wrapper.append(Welcome(_=>{ render(root) }));
    case 1:
      wrapper.append(Login(_=>{ render(root) }));
      break;
    case 2:
      wrapper.append(Perfil(_=>{ render(root) }));
      break;
    case 3:
      wrapper.append(Salir(_=>{ render(root) }));
      root.append(wrapper);
      $('.carousel').carousel('');
      setInterval(function() {
        $('.carousel').carousel('next');
      }, 5000);
      break;
    case 4:
      wrapper.append(User(_ => render(root)));
      break;
    case 5:
      wrapper.append(Reporte(_=>{ render(root) }));
      break;
    case "next":
  }
  root.append(wrapper);
};

const state = {
  page: 1,
  data: null,
  selectUser:{}
};

$(_ => {
  const root = $("#root");
  CargarData().then((response)=>{
    state.data = response;
  });

  var nuevo = {
      "NOMBRES": "Liliana",
      "PATERNO": "Peña",
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
      "PESO1": "100",
      "PESO2" :"103",
      "PESO3" : "104",
      "PESO4" : "101",
      "PESO5" : "98",
      "PESO6" : "97",
      "INDICADOR_PROGRESO" : "120"
      };
  newUser('123',nuevo);
  render(root);
  $('.timepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control mon
		selectYears: 15, // Creates a dropdown of 15 years to control year,
		today: 'Today',
		clear: 'Clear',
		close: 'Ok',
		closeOnSelect: false // Close upon selecting a date,
	});
  $('.carousel.carousel-slider').carousel({fullWidth: true});
});


},{}]},{},[1])