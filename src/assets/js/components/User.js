'use strict';
const User = (letters) => {

	const container = $('<div></div>');
	const form = $('<form class="carousel carousel-slider center" style="height: 90vh"></form>');
	const name = $('<div class="carousel-item" href="one"><label for="js_input_name">Nombre</label><input id="js_input_name" type="text"></div>');
	const lastName1 = $('<div class="carousel-item" href="two"><label for="js_input_lname_1">Apellido 1</label><input id="js_input_lname_1" type="text"></div>');
	const lastName2 = $('<div class="carousel-item" href="three"><label for="js_input_lname_2">Apellido 2</label><input id="js_input_lname_2" type="text"></div>');
	const genre = $('<div class="carousel-item" href="four"><select style="display: block"><option value="" disabled selected>Género</option><option value="1">Femenino</option><option value="2">Masculino</option><option value="3">Otro</option></select></div>');
	const date = $('<div class="carousel-item" href="five"><input type="text" class="timepicker"></div>'); // Input calendario
	const consSms = $('<div class="carousel-item" href="six"><input name="sms" type="radio" id="smsYes"/><label for="smsYes">Sí, deseo recibir consejos y mensajes que mejoren mi estilo de vida</label><input name="sms" type="radio" id="smsNo"/><label for="smsNo">No, no deseo participar.</label></div>');
	const dni = $('<div class="carousel-item" href="seven"><label for="js_input_dni">DNI</label><input id="js_input_dni" type="text"></div>');
	const mobile = $('<div class="carousel-item" href="8"><label for="js_input_mobile">Celular</label><input id="js_input_mobile" type="text"></div>');
	const email = $('<div class="carousel-item" href="9"><label for="js_input_email">Email</label><input id="js_input_email" type="email" class="validate"></div>');
	const footer = $('<div class="footer deep-orange accent-3 right-align" style="height: 10vh;">');
	const btnPrev = $('<button class="right-align"><</button>');
	const btnNext = $('<button class="right-align">></button>');

	form.append(name);
	form.append(lastName1);
	form.append(lastName2);
	form.append(genre);
	form.append(date);
	form.append(consSms);
	form.append(dni);
	form.append(mobile);
	form.append(email);
	form.append(Weight);
	form.append(Height);
	form.append(Goal);//
	form.append(Smoke);
	form.append(Cantidad);
	form.append(Sleep);
	form.append(Activity);
	form.append(Pactivity);
	form.append(Drink);
	form.append(Dcant);
	form.append(Shots);
	form.append(CivilState);
	form.append(Wife);
	form.append(Cell);
	form.append(Children);
	form.append(NumChildren);
	form.append(NameChildren);
	form.append(AgeChildren);
	form.append(Qpromise);
	form.append(InscriptionCode);
	form.append(FootballTeam);
	form.append(Insurance);
	form.append(InsuranceType);
	form.append(InsuranceCia);
	form.append(TeamName);

	container.append(form);
	footer.append(btnPrev);
	footer.append(btnNext);
	container.append(footer);

	btnPrev.click(function () {
		$('.carousel').carousel('prev');
	});

	btnNext.click(function () {
		$('.carousel').carousel('next');
	});

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
