(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const Header = () => {
    const header = $('<header><div class="container"></div></header>');
    const title = $('<h1 class="center-align">Estado participate</h1>');
    const peso = $('<div class="input-field col s12"></div>');
    const peso1 = $('<label for="pesoInicial">Peso: </label>');
    const peso2 = $('<input id="pesoInicial" type="text" class="validate">');
    const peso3 = $('<span><br>*Mínimo 40kg, máx. 200kg.</span>');
    const talla = $('<div class="input-field col s12"></div>');
    const talla1 = $('<label for="talla">Talla: </label>');
    const talla2 = $('<input id="talla" type="text" class="validate">');
    const talla3 = $('<span><br>*Mínimo 50cm, máx. 250cm</span>');
    const meta = $('<div class="input-field col s12"></div>');
    const meta1 = $('<label for="meta">Meta de peso: </label>');
    const meta2 = $('<input disabled id="meta" type="text" class="validate">');
    const fuma = $('<div class="input-field col s12"></div>');
    const fuma1 = $('<label for="fuma">¿Fuma? </label>');
    const fuma2 = $('<input name="group1" type="radio" id="fumaSi"/><label for="test1">Sí</label>');
    const fuma3 = $('<input name="group1" type="radio" id="fumaNo"/><label for="test1">No</label>');
    const cantidad = $('<div class="input-field col s12"></div>');
    const cantidad1 = $('<label for="fuma">¿Con qué frecuencia fuma? </label>');
    const cantidad2 = $('<input name="group2" type="radio" id="fumaDiario"/><label for="test1">Diario</label>');
    const cantidad3 = $('<input name="group2" type="radio" id="fumaInterdiario"/><label for="test1">Interdiario</label>');
    const cantidad4 = $('<input name="group2" type="radio" id="fumaSemanal"/><label for="test1">Semanal</label>');
    const cantidad5 = $('<input name="group2" type="radio" id="fumaQuincenal"/><label for="test1">Quincenal</label>');
    const cantidad6 = $('<input name="group2" type="radio" id="fumaMensual"/><label for="test1">Mensual</label>');
    const cantidad7 = $('<input name="group2" type="radio" id="fumaMenorMensual"/><label for="test1">Menos que una vez al mes</label>');
    const sueno = $('<div class="input-field col s12"></div>');
    const sueno1 = $('<label for="fuma">Horas de sueño</label>');
    const sueno2 = $('<input name="group3" type="radio" id="menorCinco"/><label for="test1">Menos de 5 horas</label>');
    const sueno3 = $('<input name="group3" type="radio" id="cincoHoras"/><label for="test1">5 horas</label>');
    const sueno4 = $('<input name="group3" type="radio" id="seisHoras"/><label for="test1">6 horas</label>');
    const sueno5 = $('<input name="group3" type="radio" id="sieteHoras"/><label for="test1">7 horas</label>');
    const sueno6 = $('<input name="group3" type="radio" id="ochoHoras"/><label for="test1">8 horas</label>');
    const sueno7 = $('<input name="group3" type="radio" id="mayorOcho"/><label for="test1">Más de 8 horas</label>');
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
    const dcant2 = $('<input name="group7" type="radio" id="drinkDiario"/><label for="test1">Diario</label>');
    const dcant3 = $('<input name="group7" type="radio" id="drinkInterdiario"/><label for="test1">Interdiario</label>');
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
 
    header.append(title);
 
 peso.append(peso1);
 peso.append(peso2);
 peso.append(peso3);
 
 talla.append(talla1);
 talla.append(talla2);
 talla.append(talla3);
 
 meta.append(meta1);
 meta.append(meta2);
 
 fuma.append(fuma1);
 fuma.append(fuma2);
 fuma.append(fuma3);
 
 cantidad.append(cantidad1);
 cantidad.append(cantidad2);
 cantidad.append(cantidad3);
 cantidad.append(cantidad4);
 cantidad.append(cantidad5);
 cantidad.append(cantidad6);
 cantidad.append(cantidad7);
 
 sueno.append(sueno1);
 sueno.append(sueno2);
 sueno.append(sueno3);
 sueno.append(sueno4);
 sueno.append(sueno5);
 sueno.append(sueno6);
 sueno.append(sueno7);
 
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
    
 header.append(peso);
 header.append(talla);
 header.append(meta);
 header.append(fuma);
 header.append(cantidad);
 header.append(sueno);
 header.append(activity);
 header.append(pactivity);
 header.append(drink);
 header.append(dcant);
 header.append(shots);
 
    return header;
}
'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    root.append(wrapper);
}

const state = {
    user: null,
};

$( _ => {
    const root = $('#root');
    render(root);
});
},{}]},{},[1])