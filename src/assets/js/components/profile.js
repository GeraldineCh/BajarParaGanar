'use strict';

const Perfil = (update) => {
  console.log(state.user.NRO_DOCUMENTO);
  const section = $('<section class="perfil__bg">Perfil</section>');
  const name = $('<h3>'+state.user.NOMBRES+'<h3>');
  const promesa = $('<h5>"'+state.user.PROMESA+'"<h5>');
  const rowPeso = $('<div class="perfi_peso"></div>');
  const pesoActual = $('<h5>"'+state.user.INDICADOR_PROGRESO+'"<h5>');
  const pesoMeta = $('<h5>"'+state.user.META_PESO+'"<h5>');
  rowPeso.append(pesoActual,pesoMeta)

  const btnUpdate = $('<button data-target="modal1" class="btn modal-trigger">Actualizar Peso</button>');
// <button data-target="modal1" class="btn modal-trigger">Modal</button>

	const container = $('<div id="welcome" class="container center"></div>');

	const rowBtn = $('<div class="welcome_btn contentButton row"></div>');
  const rowBtn1 = $('<div class="welcome_btn contentButton row"></div>');

	const btnSignUp = $('<button type="button" class="btn-welcome yellow waves-effect waves-light btn-large" name="button">Sign up</button>');
	const btnLogIn = $('<button type="button" class="btn-welcome yellow waves-effect waves-light btn-large" name="button">Log in</button>');
  container.append(name,promesa,rowPeso,btnUpdate);
  section.append(container);

  btnUpdate.on('click',(e) => {
    e.preventDefault();
  // console.log(moda);
  // moda.modal('open');
    $('#modal1').modal();
    $('#btnListo').on('click',(e)=>{
      console.log($('#newPeso').val());
      updatePeso(state.user.NRO_DOCUMENTO,$('#newPeso').val());
    });
  });

  return section;
}
