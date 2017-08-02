'use strict';
const User = (update) => {
	alert("User");
	const container = $('<form></form>');
	const title = $('<h1>Datos del participante</h1>');
	const name = $('<div><label for="js_input_name">Nombre</label><input id="js_input_name" type="text"></div>');
	const lName1 = $('<div><label for="js_input_lname_1">Apellido 1</label><input id="js_input_lname_1" type="text"></div>');
	const lName2 = $('<div><label for="js_input_lname_2">Apellido 2</label><input id="js_input_lname_2" type="text"></div>');
	const genero = $('<div><select><option value="" disabled selected>Género</option><option value="1">Femenino</option><option value="2">Masculino</option><option value="3">Otro</option></select></div>');

	container.append(title);
	container.append(name);
	container.append(lName1);
	container.append(lName2);
	container.append(genero);
	return container;
};
