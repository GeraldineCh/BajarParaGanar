'use strict';

const Login = (update) => {
  const section = $('<section class="login__bg"></section>');
	const container = $('<div id="login" class="container center"></div>');

	const rowImage = $('<div class="logo"></div>');
  const divDni = $('<div class="input-field col s6">');
  const divPassword = $('<div class="input-field col s6">');

  const inputDni = $('<input placeholder="Ingrese Dni" id="loginDni" type="text" class="validate center-align" value="0123456">');
  const inputPassword = $('<input placeholder="Ingrese Password" id="loginPassword" disabled type="password" class="validate center-align">');

  const labelDni = $('<h2 for="loginDni">DNI Number: </h2>');
  const labelPassword = $('<h2 for="loginPassword">Password :</h2>');
  const error = $('<span class="red-text">Error en usuario</span>');

	divDni.append(labelDni,inputDni);
  divPassword.append(labelPassword,inputPassword);

	container.append(rowImage,divDni,divPassword);

	section.append(container);

  const activarCheck = _ => {
  		if(inputDni.val().length == 8){
        inputPassword.removeAttr('disabled');
        inputPassword.focus();

  		}
      else
      inputPassword.attr('disabled','false');
  	};
  const ValidateUser = () =>{
    getUserDni(inputDni.val()).then((response) =>{
      state.user = response;
      if(response != null && inputPassword.val() == '1'){
        state.page = 2;
        update();
      }else {
        // container.append(error);
      }
    });
  }

  	inputDni.on({
  		keypress: ValidateNumber,
  		keyup: activarCheck
  	});

  	inputPassword.on({
  		keypress:activarCheck,
  		keyup:ValidateUser
  	});


  return section;
}
