const Family = () => {
    const container = $('<div class="container"></div>');
    const title = $('<h1 class="center-align">Familia</h1>');
    
    container.append(title);
 
 const civilState = $('<div class="input-field col s12"></div>');
    const civilState1 = $('<select id="civilState" style="display: block">Estado Civil<option value="" disabled selected>Seleccione</option>' +
      '<option value="Soltero">Soltero</option><option value="Casado">Casado</option><option value="Conviviente">Conviviente</option>' +
      '<option value="Viudo">Viudo</option><option value="Divorciado">Divorciado</option></select>');

    const wife = $('<div class="input-field col s12"></div>');
    const wife1 = $('<label for="wife">Nombre de esposa/conviviente/pareja: </label>');
    const wife2 = $('<input id="nameCouple" type="text" class="validate">');
 
    const cell = $('<div class="input-field col s12"></div>');
    const cell1 = $('<label for="wife">Celular de la pareja: </label>');
    const cell2 = $('<input id="phoneCouple" type="text" class="validate">');
 
 const children = $('<div class="input-field col s12"></div>');
    const children1 = $('<label>¿Tiene hijos?</label>');
    const children2 = $('<input name="group1" type="radio" id="childrenSi" value="si"/><label for="test1">Sí</label>');
    const children3 = $('<input name="group1" type="radio" id="childrenNo" value="no"/><label for="test1">No</label>');
 
 const numChildren = $('<div class="input-field col s12"></div>');
    const numChildren1 = $('<label for="numChildren">Número de hijos: </label>');
    const numChildren2 = $('<input id="numChildren" type="text" class="validate">');
 
 const nameChildren = $('<div class="input-field col s12"></div>');
    const nameChildren1 = $('<label for="nameChildren">Nombre de hijos: </label>');
    const nameChildren2 = $('<input id="nameChildren" type="text" class="validate">');
 
 const ageChildren = $('<div class="input-field col s12"></div>');
    const ageChildren1 = $('<label for="ageChildren">Edad de los hijos: </label>');
    const ageChildren2 = $('<input id="ageChildren" type="text" class="validate">');
  const next = $('<button>Siguiente</button>');
 
 civilState.append(civilState1);
 
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
 container.append(next);
 
  next.click(function (e) {
    e.preventDefault();
    state.selectUser.CELULAR_PAREJA = cell2.val();
    state.selectUser.ESTADO_CIVIL = civilState1.val();
    state.selectUser.TIENE_HIJOS = $('input[type=radio]').val();
    state.selectUser.NOMBRE_PAREJA = wife2.val();
    state.selectUser.NRO_HIJOS = numChildren2.val();
  });

    return container;
};