'use strict';
const Qpromise = () => {
  const promise = $('<div class="col s12 carousel-item"></div>');
  const promise1 = $('<label for="promise">Promesa personal: </label>');
  const promise2 = $('<textarea id="promise" class="materialize-textarea" data-length="120"></textarea>');

  promise.append(promise1);
  promise.append(promise2);
  return promise;
}

const FootballTeam = () => {
  const footballTeam = $('<div class="carousel-item"></div>');
  const footballTeam1 = $('<label>Equipo de fútbol: </label>');
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
  const insurance1 = $('<label>¿ Usted cuenta con un seguro ?</label>');
  const insurance2 = $('<input name="group8" type="radio" id="insuranceSi"/><label for="insuranceSi">Sí</label>');
  const insurance3 = $('<input name="group8" type="radio" id="insuranceNo"/><label for="insuranceNo">No</label>');

  insurance.append(insurance1);
  insurance.append(insurance2);
  insurance.append(insurance3);

  insurance2.on('change',(e) => {
    e.preventDefault();
    insurance.append(InsuranceType());
  });
  insurance3.on('change',(e) => {
    $('.carousel').carousel('next');
  });

  return insurance;
}

const InsuranceType = () => {
  const insuranceType = $('<div class=""></div>');
  const insuranceType1 = $('<p>Tipo de seguro: </p>');
  const insuranceType2 = $('<select id="insuranceType" style="display: block"  ></select>');
  const insuranceType3 = $('<option value="" disabled selected>Seleccione</option>');
  const insuranceType4 = $('<option value="1">Salud</option>');
  const insuranceType5 = $('<option value="2">EPS</option>');
  const insuranceType6 = $('<option value="3">Vida</option>');
  const insuranceType7 = $('<option value="4">SCTR</option>');
  const insuranceType8 = $('<option value="5">Vehicular</option>');

  insuranceType2.on('change',(e) => {
    e.preventDefault();
    insuranceType.empty();
    if(insuranceType2.val() !== "" ){
      insuranceType.append(InsuranceCia());
    }
  });

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
  const insuranceCia = $('<div class=""></div>');
  const insuranceCia1 = $('<label>Compañía con la cual está asegurado: </label>');
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
  const teamName = $('<div class="col s12 carousel-item"></div>');
  const teamName1 = $('<label for="teamName">Nombre del equipo con el que perderá peso: </label>');
  const teamName2 = $('<input id="teamName" type="text" class="validate">');

  teamName.append(teamName1);
  teamName.append(teamName2);


  return teamName;
}