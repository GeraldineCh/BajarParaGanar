(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const Family = () => {
  const container = $('<div class="container"></div>');
  const title = $('<h1 class="center-align">Familia</h1>');

container.append(title);

 const civilState = $('<div class="input-field col s12"></div>');
    const civilState1 = $('<label for="civilState">Estado civil </label>');
    const civilState2 = $('<select id="civilState"></select>');
    const civilState3 = $('<option value="" disabled selected>Seleccione</option>');
    const civilState4 = $('<option value="1">Soltero</option>');
    const civilState5 = $('<option value="2">Casado</option>');
    const civilState6 = $('<option value="3">Conviviente</option>');
    const civilState7 = $('<option value="4">Vuido</option>');
    const civilState8 = $('<option value="5">Divorciado</option>');

    const wife = $('<div class="input-field col s12"></div>');
    const wife1 = $('<label for="wife">Nombre de esposa/conviviente/pareja: </label>');
    const wife2 = $('<input id="wife" type="text" class="validate">');

    const cell = $('<div class="input-field col s12"></div>');
    const cell1 = $('<label for="wife">Celular de la pareja: </label>');
    const cell2 = $('<input id="wife" type="text" class="validate">');

 const children = $('<div class="input-field col s12"></div>');
    const children1 = $('<label>¿Tiene hijos?</label>');
    const children2 = $('<input name="group1" type="radio" id="childrenSi"/><label for="test1">Sí</label>');
    const children3 = $('<input name="group1" type="radio" id="childrenNo"/><label for="test1">No</label>');

 const numChildren = $('<div class="input-field col s12"></div>');
    const numChildren1 = $('<label for="numChildren">Número de hijos: </label>');
    const numChildren2 = $('<input id="numChildren" type="text" class="validate">');

 const nameChildren = $('<div class="input-field col s12"></div>');
    const nameChildren1 = $('<label for="nameChildren">Nombre de hijos: </label>');
    const nameChildren2 = $('<input id="nameChildren" type="text" class="validate">');

 const ageChildren = $('<div class="input-field col s12"></div>');
    const ageChildren1 = $('<label for="ageChildren">Edad de los hijos: </label>');
    const ageChildren2 = $('<input id="ageChildren" type="text" class="validate">');

 civilState.append(civilState1);
 civilState.append(civilState2);
 civilState2.append(civilState3);
 civilState2.append(civilState4);
 civilState2.append(civilState5);
 civilState2.append(civilState6);
 civilState2.append(civilState7);
 civilState2.append(civilState8);

 wife.append(wife1);
 wife.append(wife2);

 cell.append(cell1);
 cell.append(cell2);

 children.append(children1);
 children.append(children2);
 children.append(children3);

 numChildren.append(numChildren1);
 numChildren.append(numChildren2);

 nameChildren.append(nameChildren1);
 nameChildren.append(nameChildren2);

 ageChildren.append(ageChildren1);
 ageChildren.append(ageChildren2);

 container.append(civilState);
 container.append(wife);
 container.append(cell);
 container.append(children);
 container.append(numChildren);
 container.append(nameChildren);
 container.append(ageChildren);


    return container;
}

const MoreInfo = () => {
    const field = $('<div class="container"></div>');
    const title = $('<h1 class="center-align">Información variada</h1>');
    field.append(title);

 const promise = $('<div class="input-field col s12"></div>');
    const promise1 = $('<label for="promise">Promesa personal: </label>');
    const promise2 = $('<textarea id="textarea1" class="materialize-textarea" data-length="120"></textarea>');

 const inscriptionCode = $('<div class="input-field col s12"></div>');
    const inscriptionCode1 = $('<label for="inscriptionCode">Código de inscripción: </label>');
    const inscriptionCode2 = $('<input id="inscriptionCode" type="text" class="validate">');

 const footballTeam = $('<div class="input-field col s12"></div>');
    const footballTeam1 = $('<label for="footballTeam">Equipo de fútbol: </label>');
    const footballTeam2 = $('<select id="footballTeam"></select>');
    const footballTeam3 = $('<option value="" disabled selected>Seleccione</option>');
    const footballTeam4 = $('<option value="1">Universitario de Deportes</option>');
    const footballTeam5 = $('<option value="2">Alianza Lima</option>');
    const footballTeam6 = $('<option value="3">Sporting Cristal</option>');
    const footballTeam7 = $('<option value="4">Melgar</option>');
    const footballTeam8 = $('<option value="5">Cienciano</option>');
    const footballTeam9 = $('<option value="6">Sport Boys</option>');
    const footballTeam10 = $('<option value="7">Otro</option>');

 const insurance = $('<div class="input-field col s12"></div>');
    const insurance1 = $('<label>¿Está asegurado?</label>');
    const insurance2 = $('<input name="group1" type="radio" id="insuranceSi"/><label for="test1">Sí</label>');
    const insurance3 = $('<input name="group1" type="radio" id="insuranceNo"/><label for="test1">No</label>');

 const insuranceType = $('<div class="input-field col s12"></div>');
    const insuranceType1 = $('<label for="insuranceType">Tipo de seguro: </label>');
    const insuranceType2 = $('<select id="insuranceType" multiple></select>');
    const insuranceType3 = $('<option value="" disabled selected>Seleccione</option>');
    const insuranceType4 = $('<option value="1">Salud</option>');
    const insuranceType5 = $('<option value="2">EPS</option>');
    const insuranceType6 = $('<option value="3">Vida</option>');
    const insuranceType7 = $('<option value="4">SCTR</option>');
    const insuranceType8 = $('<option value="5">Vehicular</option>');

 const insuranceCia = $('<div class="input-field col s12"></div>');
    const insuranceCia1 = $('<label for="insuranceCia">Compañía con la cual está asegurado: </label>');
    const insuranceCia2 = $('<select id="insuranceCia"></select>');
    const insuranceCia3 = $('<option value="" disabled selected>Seleccione</option>');
    const insuranceCia4 = $('<option value="1">Rimac</option>');
    const insuranceCia5 = $('<option value="2">Pacífico</option>');
    const insuranceCia6 = $('<option value="3">Mapfre</option>');
    const insuranceCia7 = $('<option value="4">Interseguro</option>');
    const insuranceCia8 = $('<option value="5">La Positiva</option>');
    const insuranceCia9 = $('<option value="6">EsSalud</option>');
    const insuranceCia10 = $('<option value="7">No sabe</option>');

 const teamName = $('<div class="input-field col s12"></div>');
    const teamName1 = $('<label for="teamName">Nombre del equipo con el que perderá peso: </label>');
    const teamName2 = $('<input id="teamName" type="text" class="validate">');

 promise.append(promise1);
 promise.append(promise2);

 inscriptionCode.append(inscriptionCode1);
 inscriptionCode.append(inscriptionCode2);

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

 insurance.append(insurance1);
 insurance.append(insurance2);
 insurance.append(insurance3);

 insuranceType.append(insuranceType1);
 insuranceType.append(insuranceType2);
 insuranceType2.append(insuranceType3);
 insuranceType2.append(insuranceType4);
 insuranceType2.append(insuranceType5);
 insuranceType2.append(insuranceType6);
 insuranceType2.append(insuranceType7);
 insuranceType2.append(insuranceType8);

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

 teamName.append(teamName1);
 teamName.append(teamName2);

 field.append(promise);
 field.append(inscriptionCode);
 field.append(footballTeam);
 field.append(insurance);
 field.append(insuranceType);
 field.append(insuranceCia);
 field.append(teamName);

    return field;
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
}

const Height = () => {
	const height = $('<div class="input-field col s12 carousel-item"></div>');
	const height1 = $('<label for="height">Talla: </label>');
	const height2 = $('<input id="height" type="text" class="validate">');
	const height3 = $('<span><br>*Mínimo 50cm, máx. 250cm</span>');

	height.append(height1);
	height.append(height2);
	height.append(height3);
	return height;
}

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
	const form = $('<form class="carousel carousel-slider center" style="height: 90vh"></form>');
	const name = $('<div class="carousel-item" href="one"><label for="js_input_name">Nombre</label><input id="js_input_name" type="text"></div>');
	const lastName1 = $('<div class="carousel-item" href="two"><label for="js_input_lname_1">Apellido 1</label><input id="js_input_lname_1" type="text"></div>');
	const lastName2 = $('<div class="carousel-item" href="three"><label for="js_input_lname_2">Apellido 2</label><input id="js_input_lname_2" type="text"></div>');
	const genre = $('<div class="carousel-item" href="four"><select style="display: block"><option value="" disabled selected>Género</option><option value="1">Femenino</option><option value="2">Masculino</option><option value="3">Otro</option></select></div>');
	const date = $('<div class="carousel-item" href="five"><input type="text" class="timepicker"></div>'); // Input calendario
	const consSms = $('<div class="carousel-item" href="six"><input name="sms" type="radio" id="smsYes"/><label for="smsYes">Sí, deseo recibir consejos y mensajes que mejoren mi estilo de vida</label><input name="sms" type="radio" id="smsNo"/><label for="smsNo">No, no deseo participar.</label></div>');
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
	form.append(Goal);//
	form.append(Smoke);
	form.append(Cantidad);
	form.append(Sleep);
	form.append(Activity);
	form.append(Pactivity);
	form.append(Drink);
	form.append(Dcant);
	form.append(Shots);
	container.append(form);
	footer.append(btnPrev);
	footer.append(btnNext);
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

	return container;
};

'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

	switch(state.screenView) {
    case null:
      wrapper.append(User(_ => render(root)));
			//wrapper.append(StateUser(_ => render(root)));
			//wrapper.append(Family(_ => render(root)));
			//wrapper.append(MoreInfo(_ => render(root)));
      break;
		case "next":
	}

  root.append(wrapper);
}

const state = {
	screenView: null
};

$( _ => {

	const root = $('.root');
	render(root);
	//Funcion para input calendario
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