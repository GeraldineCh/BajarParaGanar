
'use strict';

const Welcome = (update) => {
  const section = $('<section class="welcome__bg"><img src="assets/img/logo-white.png" alt="" class="logo-welcome"></section>');
	const container = $('<div id="welcome" class="container center"></div>');

	const rowImage = $('<div class="logo"></div>');
	const rowBtn = $('<div class="welcome_btn contentButton row"></div>');
  const rowBtn1 = $('<div class="welcome_btn contentButton row"></div>');
  const rowSep = $('<div class="row"></div>');

	const btnSignUp = $('<button type="button" class="btn-welcome waves-effect waves-light btn-large" name="button">Regístrate</button>');
	const btnLogIn = $('<button type="button" class="btn-welcome waves-effect waves-light btn-large" name="button">Inicia sesión</button>');

	rowBtn.append(btnSignUp);
  rowBtn1.append(btnLogIn);
	container.append(rowImage,rowBtn,rowBtn1);

	section.append(container);

  btnSignUp.on('click',(e) => {
    state.page = 4;
    update();
  });
  btnLogIn.on('click',(e) => {
    state.page = 1;
    update();
  });

  return section;
}
