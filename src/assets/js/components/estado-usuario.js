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
    const smoke1 = $('<label for="smoke">¿Fuma? </label>');
    const smoke2 = $('<input name="group1" type="radio" id="smokeSi"/><label for="test1">Sí</label>');
    const smoke3 = $('<input name="group1" type="radio" id="smokeNo"/><label for="test1">No</label>');
    const cantidad = $('<div class="input-field col s12"></div>');
    const cantidad1 = $('<label for="smoke">¿Con qué frecuencia fuma? </label>');
    const cantidad2 = $('<input name="group2" type="radio" id="smokeDaily"/><label for="test1">Diario</label>');
    const cantidad3 = $('<input name="group2" type="radio" id="smokeInterdiario"/><label for="test1">Interdiario</label>');
    const cantidad4 = $('<input name="group2" type="radio" id="smokeSemanal"/><label for="test1">Semanal</label>');
    const cantidad5 = $('<input name="group2" type="radio" id="smokeQuincenal"/><label for="test1">Quincenal</label>');
    const cantidad6 = $('<input name="group2" type="radio" id="smokeMensual"/><label for="test1">Mensual</label>');
    const cantidad7 = $('<input name="group2" type="radio" id="smokeMenorMensual"/><label for="test1">Menos que una vez al mes</label>');
    const sleep = $('<div class="input-field col s12"></div>');
    const sleep1 = $('<label for="sleep">Horas de sueño</label>');
    const sleep2 = $('<input name="group3" type="radio" id="menorCinco"/><label for="test1">Menos de 5 horas</label>');
    const sleep3 = $('<input name="group3" type="radio" id="cincoHoras"/><label for="test1">5 horas</label>');
    const sleep4 = $('<input name="group3" type="radio" id="seisHoras"/><label for="test1">6 horas</label>');
    const sleep5 = $('<input name="group3" type="radio" id="sieteHoras"/><label for="test1">7 horas</label>');
    const sleep6 = $('<input name="group3" type="radio" id="ochoHoras"/><label for="test1">8 horas</label>');
    const sleep7 = $('<input name="group3" type="radio" id="mayorOcho"/><label for="test1">Más de 8 horas</label>');
    const activity = $('<div class="input-field col s12"></div>');
    const activity1 = $('<label for="fuma">¿Actividad física al menos 10 miin diarios?</label>');
    const activity2 = $('<input name="group4" type="radio" id="activityYes"/><label for="test1">Sí</label>');
    const activity3 = $('<input name="group4" type="radio" id="ativityNo"/><label for="test1">No</label>');
    const pactivity = $('<div class="input-field col s12"></div>');
    const pactivity1 = $('<label for="fuma">¿Actividad física al menos 30 miin diarios?</label>');
    const pactivity2 = $('<input name="group5" type="radio" id="pactivityYes"/><label for="test1">Sí</label>');
    const pactivity3 = $('<input name="group5" type="radio" id="pativityNo"/><label for="test1">No</label>');
    const drink = $('<div class="input-field col s12"></div>');
    const drink1 = $('<label for="fuma">¿Toma?</label>');
    const drink2 = $('<input name="group6" type="radio" id="drinkYes"/><label for="test1">Sí</label>');
    const drink3 = $('<input name="group6" type="radio" id="drinkNo"/><label for="test1">No</label>');
    const dcant = $('<div class="input-field col s12"></div>');
    const dcant1 = $('<label for="fuma">¿Con qué frecuencia toma? </label>');
    const dcant2 = $('<input name="group7" type="radio" id="drinkDaily"/><label for="test1">Diario</label>');
    const dcant3 = $('<input name="group7" type="radio" id="drinkInterdaily"/><label for="test1">Interdiario</label>');
    const dcant4 = $('<input name="group7" type="radio" id="drinkSemanal"/><label for="test1">Semanal</label>');
    const dcant5 = $('<input name="group7" type="radio" id="drinkQuincenal"/><label for="test1">Quincenal</label>');
    const dcant6 = $('<input name="group7" type="radio" id="drinkMensual"/><label for="test1">Mensual</label>');
    const dcant7 = $('<input name="group7" type="radio" id="drinkMenorMensual"/><label for="test1">Menos que una vez al mes</label>');
    const shots = $('<div class="input-field col s12"></div>');
    const shots1 = $('<label for="shots">¿Cuántos vasos?</label>');
    const shots2 = $('<input name="group8" type="radio" id="oneShot"/><label for="test1">1</label>');
    const shots3 = $('<input name="group8" type="radio" id="twoShot"/><label for="test1">2</label>');
    const shots4 = $('<input name="group8" type="radio" id="threeShot"/><label for="test1">3</label>');
    const shots5 = $('<input name="group8" type="radio" id="fourShot"/><label for="test1">4</label>');
    const shots6 = $('<input name="group8" type="radio" id="fiveShot"/><label for="test1">Más de 4</label>');
 
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
 cantidad.append(cantidad3);
 cantidad.append(cantidad4);
 cantidad.append(cantidad5);
 cantidad.append(cantidad6);
 cantidad.append(cantidad7);
 
 sleep.append(sleep1);
 sleep.append(sleep2);
 sleep.append(sleep3);
 sleep.append(sleep4);
 sleep.append(sleep5);
 sleep.append(sleep6);
 sleep.append(sleep7);
 
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
 dcant.append(dcant3);
 dcant.append(dcant4);
 dcant.append(dcant5);
 dcant.append(dcant6);
 dcant.append(dcant7);
 
 shots.append(shots1);
 shots.append(shots2);
 shots.append(shots3);
 shots.append(shots4);
 shots.append(shots5);
 shots.append(shots6);
    
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