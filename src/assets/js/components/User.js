'use strict';
const User = (letters) => {

	const container = $('<form></form>');
	const title = $('<h1>Datos del participante</h1>');
	const name = $('<div><label for="js_input_name">Nombre</label><input id="js_input_name" type="text"></div>');
	const lastName1 = $('<div><label for="js_input_lname_1">Apellido 1</label><input id="js_input_lname_1" type="text"></div>');
	const lastName2 = $('<div><label for="js_input_lname_2">Apellido 2</label><input id="js_input_lname_2" type="text"></div>');
	const genre = $('<div><select><option value="" disabled selected>Género</option><option value="1">Femenino</option><option value="2">Masculino</option><option value="3">Otro</option></select></div>');
	const date = $('<input type="text" class="timepicker">'); // Input calendario
	const consSms = $('<div><input type="checkbox" id="test5"/><label for="test5">Recibir sms</label></div>');
	const dni = $('<div><label for="js_input_dni">DNI</label><input id="js_input_dni" type="text"></div>');
	const mobile = $('<div><label for="js_input_mobile">Celular</label><input id="js_input_mobile" type="text"></div>');
	const email = $('<div><label for="js_input_email">Email</label><input id="js_input_email" type="email" class="validate"></div>');

	container.append(title);
	container.append(name);
	container.append(lastName1);
	container.append(lastName2);
	container.append(genre);
	container.append(date);
	container.append(consSms);
	container.append(dni);
	container.append(mobile);
	container.append(email);
	//name.prop("validation", "letters");
	//console.log(name.prop("validation"));

	function letters(input) {
		input.last().on('keypress', (e) => {
			let codigoTecla = e.keyCode;
				if((codigoTecla >= 97 && codigoTecla <= 122) ||
					 (codigoTecla >= 65 && codigoTecla <= 90) ||
					 (codigoTecla == 32) || (codigoTecla == 39)) {

					$('#error').text("");
					return true
				} else {
					$('#error').text("error");
					return false
				}
		});
	}
	letters(name);
	letters(lastName1);
	letters(lastName2);

	return container;
};
