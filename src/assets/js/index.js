'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Reporte(_=>{ render(root) }));
  }else if(state.page == 1){
    wrapper.append(Welcome(_=>{ render(root) }));
  }else if (state.page == 2){
    wrapper.append(ChoiceOption(_=>{ render(root) }));
  }
  root.append(wrapper);
};

const state = {
  page: 1,
  data: null,
  selectUser:{}
};


$(_ => {
  const root = $("#root");
  render(root);

  CargarData().then((response)=>{
    state.data = response;
    console.log(state.data['1'].NOMBRES);
  });

  var nuevo = {
      "NOMBRES": "Liliana",
      "PATERNO": "Peña",
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
      newUser('123',nuevo);
});
