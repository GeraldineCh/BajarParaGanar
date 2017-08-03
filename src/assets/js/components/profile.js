'use strict';

const Perfil = (update) => {
  console.log(state.user.NRO_DOCUMENTO);
  const section = $('<section class="perfil__bg"><img src="assets/img/logo-white.png" alt="" class="logo-white"></section>');
  const header = $('<div class="deep-purple lighten-1 white-text perfil">Perfil</div>');
  const name = $('<br><h3> Hola '+state.user.NOMBRES+'<h3>');
  const promesa = $('<br><div class="row"><h5 class="z-depth-1 col s12 m6 offset-m3" style="padding: 20px"><i>'+state.user.PROMESA+'</i><h5></div>');
  const rowPeso = $('<div class="perfi_peso"></div>');
  const pesoActual = $('<h5>"'+state.user.INDICADOR_PROGRESO+'"<h5>');
  const pesoMeta = $('<h5> "'+state.user.META_PESO+'"<h5>');
  rowPeso.append(pesoActual,pesoMeta);

  const btnUpdate = $('<button data-target="modal1" class="btn modal-trigger">Actualizar Peso</button>');
// <button data-target="modal1" class="btn modal-trigger">Modal</button>

  const container = $('<div id="welcome" class="container center"></div>');

  const rowBtn = $('<div class="welcome_btn contentButton row"></div>');
  const rowBtn1 = $('<div class="welcome_btn contentButton row"></div>');

  const btnSignUp = $('<button type="button" class="btn-welcome yellow waves-effect waves-light btn-large" name="button">Sign up</button>');
  const btnLogIn = $('<button type="button" class="btn-welcome yellow waves-effect waves-light btn-large" name="button">Log in</button>');
  container.append(name,promesa,rowPeso,btnUpdate);
  section.append(header);
  section.append(container);

  btnUpdate.on('click',(e) => {
    e.preventDefault();
    $('#modal1').modal();
    $('#newPeso').on({
      keypress: ValidateNumber,
    });
    $('#btnListo').on('click',(e)=>{
      console.log($('#newPeso').val());
      if($('#newPeso').val() != ""){
        updatePeso(state.user.NRO_DOCUMENTO,$('#newPeso').val());
       // $('#newPeso').val('');
        state.page = 3;
        update();
      }
    });
  });

  return section;
};