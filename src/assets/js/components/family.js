const CivilState = () => {
	const civilState = $('<div class="carousel-item"></div>');
	const civilState1 = $('<p>Estado civil </p>');
	const civilState2 = $('<select id="civilState" style="display: block"></select>');
	const civilState3 = $('<option value="" disabled selected>Seleccione</option>');
	const civilState4 = $('<option value="1">Soltero</option>');
	const civilState5 = $('<option value="2">Casado</option>');
	const civilState6 = $('<option value="3">Conviviente</option>');
	const civilState7 = $('<option value="4">Vuido</option>');
	const civilState8 = $('<option value="5">Divorciado</option>');

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

const Wife = () => {
	const wife = $('<div class="input-field col s12 carousel-item"></div>');
	const wife1 = $('<label for="wife">Nombre de esposa/conviviente/pareja: </label>');
	const wife2 = $('<input id="wife" type="text" class="validate">');

	wife.append(wife1);
	wife.append(wife2);
	return wife;
}

const Cell = () => {
	const cell = $('<div class="input-field col s12 carousel-item"></div>');
	const cell1 = $('<label for="wife">Celular de la pareja: </label>');
	const cell2 = $('<input id="wife" type="text" class="validate">');

	cell.append(cell1);
	cell.append(cell2);
	return cell;
}

const Children = () => {
	const children = $('<div class="carousel-item"></div>');
	const children1 = $('<label>¿Tiene hijos?</label>');
	const children2 = $('<input name="group6" type="radio" id="childrenSi"/><label for="childrenSi">Sí</label>');
	const children3 = $('<input name="group6" type="radio" id="childrenNo"/><label for="childrenNo">No</label>');

	children.append(children1);
	children.append(children2);
	children.append(children3);
	return children;
}

const NumChildren = () => {
	const numChildren = $('<div class="input-field col s12 carousel-item"></div>');
	const numChildren1 = $('<label for="numChildren">Número de hijos: </label>');
	const numChildren2 = $('<input id="numChildren" type="text" class="validate">');

	numChildren.append(numChildren1);
	numChildren.append(numChildren2);
	return numChildren;
}

const NameChildren = () => {
	const nameChildren = $('<div class="input-field col s12 carousel-item"></div>');
	const nameChildren1 = $('<label for="nameChildren">Nombre de hijos: </label>');
	const nameChildren2 = $('<input id="nameChildren" type="text" class="validate">');

	nameChildren.append(nameChildren1);
	nameChildren.append(nameChildren2);
	return nameChildren;
}

const AgeChildren = () => {
	const ageChildren = $('<div class="input-field col s12 carousel-item"></div>');
	const ageChildren1 = $('<label for="ageChildren">Edad de los hijos: </label>');
	const ageChildren2 = $('<input id="ageChildren" type="text" class="validate">');

	ageChildren.append(ageChildren1);
	ageChildren.append(ageChildren2);
	return ageChildren;
}
