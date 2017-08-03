'use strict';
const User = (letters) => {

	const container = $('<form></form>');
	const title = $('<h1>Datos del participante</h1>');
	const name = $('<input id="js_input_name" type="text" placeholder="Nombre">');
	const lastName1 = $('<input id="js_input_lname_1" type="text" placeholder="Apellido Paterno">');
	const lastName2 = $('<input id="js_input_lname_2" type="text" placeholder="Apellido Materno">');
	const genre = $('<select id="genre" style="display: block">Género<option value="F">Femenino</option><option value="M">Masculino</option><option value="Otro">Otro</option></select>');
	const date = $('<input type="text" class="timepicker">'); // Input calendario
	const consSms = $('<input type="checkbox" id="sms"><label for="sms">Recibir sms</label>');
	const dni = $('<input id="js_input_dni" type="text" placeholder="Dni">');
	const mobile = $('<input id="js_input_mobile" type="text" placeholder="Celular">');
	const email = $('<input id="js_input_email" type="email" class="validate" placeholder="Email">');
	const next = $('<button>Siguiente</button>');

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
	container.append(next);
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

	next.click(function (e) {
			e.preventDefault();
   state.selectUser.NOMBRES = name.val();
   state.selectUser.PATERNO = lastName1.val();
   state.selectUser.MATERNO = lastName2.val();
   state.selectUser.NRO_DOCUMENTO = dni.val();
   state.selectUser.SEXO = genre.val();
   state.selectUser.FECHA_NACIMIENTO = date.val();
   state.selectUser.SMS_CONSENT = consSms.val();
   state.selectUser.EMAIL = email.val();
   state.selectUser.CELULAR = mobile.val();
 });

	return container;
};
