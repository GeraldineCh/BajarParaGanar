const StateUser = () => {
    const principal = $('<div class="container"></div>');
    const title = $('<h1 class="center-align">Estado participante</h1>');

    const weight = $('<div class="input-field col s12"></div>');
    const weight1 = $('<label for="weightInit">Peso: </label>');
    const weight2 = $('<input id="weightInit" type="text" class="validate">');
    const weight3 = $('<span><br>*Mínimo 40kg, máx. 200kg.</span>');

    const height = $('<div class="input-field col s12"></div>');
    const height1 = $('<label for="height">Talla: </label>');
    const height2 = $('<input id="height" type="text" class="validate">');
    const height3 = $('<span><br>*Mínimo 50cm, máx. 250cm</span>');

    const goal = $('<div class="input-field col s12"></div>');
    const goal1 = $('<label for="goal">Meta de peso: </label>');
    const goal2 = $('<input disabled id="goal" type="text" class="validate">');

    const smoke = $('<div class="input-field col s12"></div>');
    const smoke1 = $('<label>¿Fuma?</label>');
    const smoke2 = $('<input name="group1" type="radio" id="smokeSi"/><label for="test1">Sí</label>');
    const smoke3 = $('<input name="group1" type="radio" id="smokeNo"/><label for="test1">No</label>');

    const cantidad = $('<div class="input-field col s12"></div>');
    const cantidad1 = $('<label for="smoke">¿Con qué frecuencia fuma? </label>');
    const cantidad2 = $('<select id="smoke"></select>');
    const cantidad3 = $('<option value="" disabled selected>Seleccione</option>');
    const cantidad4 = $('<option value="1">Diario</option>');
    const cantidad5 = $('<option value="2">Interdiario</option>');
    const cantidad6 = $('<option value="3">Semanal</option>');
    const cantidad7 = $('<option value="4">Quincenal</option>');
    const cantidad8 = $('<option value="5">Mensual</option>');
    const cantidad9 = $('<option value="6">Menos que una vez al mes</option>');

    const sleep = $('<div class="input-field col s12"></div>');
    const sleep1 = $('<label for="sleep">Horas de sueño </label>');
    const sleep2 = $('<select id="sleep"></select>');
    const sleep3 = $('<option value="" disabled selected>Seleccione</option>');
    const sleep4 = $('<option value="1">Menos de 5 horas</option>');
    const sleep5 = $('<option value="2">5 horas</option>');
    const sleep6 = $('<option value="3">6 horas</option>');
    const sleep7 = $('<option value="4">7 horas</option>');
    const sleep8 = $('<option value="5">8 horas</option>');
    const sleep9 = $('<option value="6">Más de 8 horas</option>');

    const activity = $('<div class="input-field col s12"></div>');
    const activity1 = $('<label for="fuma">¿Actividad física al menos 10 min diarios?</label>');
    const activity2 = $('<input name="group4" type="radio" id="activityYes"/><label for="test1">Sí</label>');
    const activity3 = $('<input name="group4" type="radio" id="ativityNo"/><label for="test1">No</label>');

    const pactivity = $('<div class="input-field col s12"></div>');
    const pactivity1 = $('<label for="fuma">¿Actividad física al menos 30 min diarios?</label>');
    const pactivity2 = $('<input name="group5" type="radio" id="pactivityYes"/><label for="test1">Sí</label>');
    const pactivity3 = $('<input name="group5" type="radio" id="pativityNo"/><label for="test1">No</label>');

    const drink = $('<div class="input-field col s12"></div>');
    const drink1 = $('<label>¿Toma?</label>');
    const drink2 = $('<input name="group6" type="radio" id="drinkYes"/><label for="test1">Sí</label>');
    const drink3 = $('<input name="group6" type="radio" id="drinkNo"/><label for="test1">No</label>');

    const dcant = $('<div class="input-field col s12"></div>');
    const dcant1 = $('<label for="dcant">¿Con qué frecuencia toma? </label>');
    const dcant2 = $('<select id="dcant"></select>');
    const dcant3 = $('<option value="" disabled selected>Seleccione</option>');
    const dcant4 = $('<option value="1">Diario</option>');
    const dcant5 = $('<option value="2">Interdiario</option>');
    const dcant6 = $('<option value="3">Semanal</option>');
    const dcant7 = $('<option value="4">Quincenal</option>');
    const dcant8 = $('<option value="5">Mensual</option>');
    const dcant9 = $('<option value="6">Menos que una vez al mes</option>');

    const shots = $('<div class="input-field col s12"></div>');
    const shots1 = $('<label for="shots">¿Cuántos vasos?</label>');
    const shots2 = $('<select id="shots"></select>');
    const shots3 = $('<option value="" disabled selected>Seleccione</option>');
    const shots4 = $('<option value="1">1</option>');
    const shots5 = $('<option value="2">2</option>');
    const shots6 = $('<option value="3">3</option>');
    const shots7 = $('<option value="4">4</option>');
    const shots8 = $('<option value="5">Más de 4</option>');

    principal.append(title);

 weight.append(weight1);
 weight.append(weight2);
 weight.append(weight3);

 height.append(height1);
 height.append(height2);
 height.append(height3);

 goal.append(goal1);
 goal.append(goal2);

 smoke.append(smoke1);
 smoke.append(smoke2);
 smoke.append(smoke3);

 cantidad.append(cantidad1);
 cantidad.append(cantidad2);
 cantidad2.append(cantidad3);
 cantidad2.append(cantidad4);
 cantidad2.append(cantidad5);
 cantidad2.append(cantidad6);
 cantidad2.append(cantidad7);
 cantidad2.append(cantidad8);
 cantidad2.append(cantidad9);

 sleep.append(sleep1);
 sleep.append(sleep2);
 sleep2.append(sleep3);
 sleep2.append(sleep4);
 sleep2.append(sleep5);
 sleep2.append(sleep6);
 sleep2.append(sleep7);
 sleep2.append(sleep8);
 sleep2.append(sleep9);


 activity.append(activity1);
 activity.append(activity2);
 activity.append(activity3);

 pactivity.append(pactivity1);
 pactivity.append(pactivity2);
 pactivity.append(pactivity3);

 drink.append(drink1);
 drink.append(drink2);
 drink.append(drink3);

 dcant.append(dcant1);
 dcant.append(dcant2);
 dcant2.append(dcant3);
 dcant2.append(dcant4);
 dcant2.append(dcant5);
 dcant2.append(dcant6);
 dcant2.append(dcant7);
 dcant2.append(dcant8);
 dcant2.append(dcant9);


 shots.append(shots1);
 shots.append(shots2);
 shots2.append(shots3);
 shots2.append(shots4);
 shots2.append(shots5);
 shots2.append(shots6);
 shots2.append(shots7);
 shots2.append(shots8);

 principal.append(weight);
 principal.append(height);
 principal.append(goal);
 principal.append(smoke);
 principal.append(cantidad);
 principal.append(sleep);
 principal.append(activity);
 principal.append(pactivity);
 principal.append(drink);
 principal.append(dcant);
 principal.append(shots);

    return principal;
}
