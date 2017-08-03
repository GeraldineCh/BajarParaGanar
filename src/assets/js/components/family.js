const Cell = () => {
  const cell = $('<div class="input-field col s12 "></div>');
  const cell1 = $('<label for="wife">Celular de la pareja: </label>');
  const cell2 = $('<input id="phoneWife" type="text" class="validate">');

  cell.append(cell1);
  cell.append(cell2);
  return cell;
}

const Wife = () => {
  const wife = $('<div class="col s12"></div>');
  const wife1 = $('<label for="nameWife">Nombre de esposa/conviviente/pareja: </label>');
  const wife2 = $('<input id="nameWife" type="text" class="validate">');

  wife.append(wife1);
  wife.append(wife2);
  return wife;
}

const CivilState = () => {
  const civilState = $('<div class="carousel-item"></div>');
  const civilState1 = $('<label for="">Estado civil </label>');
  const civilState2 = $('<select id="civilState" style="display: block"></select>');
  const civilState3 = $('<option value="" disabled selected>Seleccione</option>');
  const civilState4 = $('<option value="1">Soltero</option>');
  const civilState5 = $('<option value="2">Casado</option>');
  const civilState6 = $('<option value="3">Conviviente</option>');
  const civilState7 = $('<option value="4">Vuido</option>');
  const civilState8 = $('<option value="5">Divorciado</option>');

  civilState2.on('change',(e) => {
    e.preventDefault();
    console.log(civilState2.val());
    if(civilState2.val() == 2 || civilState2.val() == 3){
      civilState.append(Wife());
      civilState.append(Cell());
    }else if(civilState2.val() == 1){
      $('.carousel').carousel('next');
    }
  });

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
const Children = () => {
  const children = $('<div class="carousel-item"></div>');
  const children1 = $('<p>¿Tiene hijos?</p>');
  const div = $('<div></div>');
  const children2 = $('<input name="group6" type="radio" id="childrenSi"><label for="childrenSi">Sí</label>');
  const children3 = $('<input name="group6" type="radio" id="childrenNo"><label for="childrenNo">No</label>');

  children2.on('click',(e) => {
    e.preventDefault();
    children.append(NumChildren());
    children.append(NameChildren());
    children.append(AgeChildren());

  });
  children3.on('click',(e) => {
    $('.carousel').carousel('next');
  });

  div.append(children2);
  div.append(children3);
  children.append(children1);
  children.append(div);

  return children;
}


const NameChildren = () => {
  const nameChildren = $('<div class="col s12"></div>');
  const nameChildren1 = $('<label for="nameChildren">Nombre de hijos: </label>');
  const nameChildren2 = $('<input id="nameChildren" type="text" class="validate">');

  nameChildren.append(nameChildren1);
  nameChildren.append(nameChildren2);
  return nameChildren;
}

const AgeChildren = () => {
  const ageChildren = $('<div class="col s12"></div>');
  const ageChildren1 = $('<label for="ageChildren">Edad de los hijos: </label>');
  const ageChildren2 = $('<input id="ageChildren" type="text" class="validate">');

  ageChildren.append(ageChildren1);
  ageChildren.append(ageChildren2);
  return ageChildren;
}