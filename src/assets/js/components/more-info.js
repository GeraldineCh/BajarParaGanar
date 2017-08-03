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
