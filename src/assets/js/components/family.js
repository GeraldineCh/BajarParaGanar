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