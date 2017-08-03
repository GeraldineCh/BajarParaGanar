'use strict';
const User = (letters) => {

  const container = $('<div><img src="assets/img/reto-power1.png" alt="" class="logo2" width="300px" ></div>');
  const form = $('<form class="carousel carousel-slider center" style="height: 90vh"><div class="carousel-fixed-item center "></div></form>');
  const btnSave = $('<a class="btn waves-effect white black-text darken-text-2" id="btnSave">GUARDAR</a>');
  const name = $('<div class="carousel-item"><label for="js_input_name">2. ¿Cúal es tu nombre?</label><input id="js_input_name" type="text"></div>');
  const lastName1 = $('<div class="carousel-item"><label for="js_input_lname_1">3. ¿Cuál es tu apellido paterno?</label><input id="js_input_lname_1" type="text"></div>');
  const lastName2 = $('<div class="carousel-item"><label for="js_input_lname_2">4. ¿Cuál es tu apellido materno?</label><input id="js_input_lname_2" type="text"></div>');
  const genre = $('<div class="carousel-item"><label for="genre">7. Género</label><select style="display: block" id="genre"><option value="" disabled selected>Seleccionar</option><option value="F">Femenino</option><option value="M">Masculino</option><option value="Otro">Otro</option></select></div>');
  const date = $('<div class="carousel-item"><label for="dateBirth">8. ¿En qué fecha naciste?</label><input type="text" class="timepicker" id="dateBirth" placeholder="Ingresar fecha"></div>'); // Input calendario
  const consSms = $('<div class="carousel-item"><label>9. ¿Deseas participar y recibir mensajes?</label>' +
    '<div style="text-align: left"><input name="sms" type="radio" id="smsYes" value="OPTEN-IN"><label for="smsYes" class="radio-left">Sí, deseo recibir consejos y mensajes que mejoren mi estilo de vida</label></div>' +
    '<div style="text-align: left"><input name="sms" type="radio" id="smsNo" class="sms" value="denied"><label for="smsNo" class="radio-left">No, no deseo participar.</label></div></div>');
  const dni = $('<div class="carousel-item"><label for="js_input_dni">1. ¿Cuál es tu número de DNI?</label><input id="js_input_dni" type="text"></div>');
  const mobile = $('<div class="carousel-item"><label for="js_input_mobile">5. ¿Cuál es tu número de celular?</label><input id="js_input_mobile" type="text"></div>');
  const email = $('<div class="carousel-item"><label for="js_input_email">6. ¿Cuál es tu email?</label><input id="js_input_email" type="email"></div>');
  const footer = $('<div class="footer1 right-align" style="height: 10vh; background-color: #0CBCAA">');
  const btnPrev = $('<button class="btn btn waves-effect waves-light white black-text right-align" id="btnP"><</button>');
  const btnNext = $('<button class="btn waves-effect waves-light white black-text right-align" id="btnN">></button>');

  form.append(dni);
  form.append(name);
  form.append(lastName1);
  form.append(lastName2);
  form.append(mobile);
  form.append(email);
  form.append(genre);
  form.append(date);
  form.append(consSms);
  form.append(Weight);
  form.append(Height);
  form.append(Goal);
  form.append(Smoke);
  form.append(Sleep);
  form.append(Activity);
  form.append(Pactivity);
  const itemDrink = $('<div class="carousel-item">Información de consumo de agua</div>');
  itemDrink.append(Drink());
  form.append(Drink());

  form.append(CivilState());
  form.append(Children);
  form.append(Qpromise);
  form.append(FootballTeam);
  form.append(Insurance);
  form.append(TeamName);

  container.append(form);
  footer.append(btnPrev);
  footer.append(btnNext);
  footer.append(btnSave);
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


  btnSave.click(function (e) {
    e.preventDefault();
    state.selectUser.NOMBRES = $('#js_input_name').val();
    state.selectUser.PATERNO = $('#js_input_lname_1').val();
    state.selectUser.MATERNO = $('#js_input_lname_2').val();
    state.selectUser.NRO_DOCUMENTO = $('#js_input_dni').val();
    state.selectUser.SEXO = $('#genre').val();
    state.selectUser.FECHA_NACIMIENTO = $('#dateBirth').val();
    state.selectUser.SMS_CONSENT = $('.sms').val();
    state.selectUser.EMAIL = $('#js_input_email').val();
    state.selectUser.CELULAR = $('#js_input_mobile').val();

    state.selectUser.PESO = $('#weightInit').val();
    state.selectUser.TALLA = $('#height').val();
    state.selectUser.META_PESO = $('#goal').val();

    state.selectUser.CELULAR_PAREJA = $('#phoneWife').val();
    state.selectUser.ESTADO_CIVIL = $('#civilState').val();
    state.selectUser.TIENE_HIJOS = $('.hijos').val();
    state.selectUser.NOMBRE_PAREJA = $('#nameWife').val();
    state.selectUser.NRO_HIJOS = $('#numChildren').val();

    state.selectUser.PROMESA = $('#promise').val();
    state.selectUser.INDICADOR_PROGRESO = 0;
    state.selectUser.NOMBRE_EQUIPO = $('#teamName').val();
    state.selectUser.EQUIPO_FUTBOL = $('#footballTeam').val();
    console.log(state.selectUser);

    newUser(state.selectUser.NRO_DOCUMENTO, state.selectUser);
  });

  return container;
};