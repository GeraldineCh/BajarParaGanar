'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch(state.page) {
    case 0:
      wrapper.append(Welcome(_=>{ render(root) }));
    case 1:
      wrapper.append(Login(_=>{ render(root) }));
      break;
    case 2:
      wrapper.append(Perfil(_=>{ render(root) }));
      break;
    case 3:
      wrapper.append(Salir(_=>{ render(root) }));
      root.append(wrapper);
      $('.carousel').carousel('');
      setInterval(function() {
        $('.carousel').carousel('next');
      }, 5000);
      break;
    case 4:
    // wrapper.append(User(_ => render(root)));
    // wrapper.append(StateUser());
    // wrapper.append(Family());
    // wrapper.append(MoreInfo());
      break;
    case 5:
      wrapper.append(Reporte(_=>{ render(root) }));
      break;
    case "next":
  }
  root.append(wrapper);
  // $('.carousel').carousel({fullWidth: true});
  // setInterval(function() {
  //   $('.carousel').carousel('next');
  // }, 5000);
};

const state = {
  page: 1,
  data: null,
  selectUser:{},
  user: null
};

$(_ => {
  const root = $("#root");

  CargarData().then((response)=>{
    state.data = response;
    console.log(state.data['1'].NOMBRES);
  });

  var nuevo = {
      "NOMBRES": "Wendy",
      "PATERNO": "Ramos",
      "MATERNO": "Gonzales",
      "SEXO": "femenino",
      "FECHA_NACIMIENTO": "22/10/1992",
      "SMS_CONSENT": "OPTEN-IN",
      "NRO_DOCUMENTO": "04334343",
      "CELULAR": "5198475293",
      "EMAIL": "DSJD@SD.com",
      "PESO": "130",
      "EQUIPO_FUTBOL"  : "U",
      "TALLA" : "120",
      "PROMESA"  : "Quiero bajar por ...",
      "TIENE_HIJOS" : "Yes",
      "NRO_HIJOS": "2",
      "ESTADO_CIVIL" : "Casado",
      "NOMBRE_PAREJA" : "Pedro",
      "CELULAR_PAREJA"  : "99834328",
      "META_PESO"  : "75",
      "NOMBRE_EQUIPO"  : "LEALTAD",
      "PESO1": "100",
      "PESO2" :"103",
      "PESO3" : "104",
      "PESO4" : "101",
      "PESO5" : "98",
      "PESO6" : "97",
      "INDICADOR_PROGRESO" : "120"
      };
  newUser('01234567',nuevo);
  render(root);
  $('.timepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control mon
		selectYears: 15, // Creates a dropdown of 15 years to control year,
		today: 'Today',
		clear: 'Clear',
		close: 'Ok',
		closeOnSelect: false // Close upon selecting a date,
	});


});
