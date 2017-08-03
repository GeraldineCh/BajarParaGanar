/*const Weight = () => {
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
}*/