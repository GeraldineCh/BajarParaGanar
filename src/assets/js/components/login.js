'use strict';

const Login = (update) => {
  const section = $('<section class="login__bg"></section>');
  const container = $('<div id="login" class="container center"></div>');

  const rowImage = $('<div class="logo"></div>');
  const divDni = $('<div class="input-field col s6">');
  const divPassword = $('<div class="input-field col s6">');

  const inputDni = $('<input placeholder="DOCUMENTO DE IDENTIDAD" id="loginDni" type="text" class="validate center-align">');
  const inputPassword = $('<input placeholder="CONTRASEÑA" id="loginPassword" disabled type="password" class="validate center-align">');

  //const inputDni = $('<input placeholder="Ingrese Dni" id="loginDni" type="text" class="validate center-align">');
  //const inputPassword = $('<input placeholder="Ingrese Password" id="loginPassword" disabled type="password" class="validate center-align">');

  const labelDni = $('<h4 for="loginDni" class="blue-text">DNI Number</h4>');
  const labelPassword = $('<h4 for="loginPassword" class="blue-text">Password</h4>');
  const error = $('<span class="red-text">Error en usuario</span>');

  divDni.append(labelDni,inputDni);
  divPassword.append(labelPassword,inputPassword);

  container.append(rowImage,divDni,divPassword);

  section.append(container);

  const activarCheck = _ => {
    if(inputDni.val().length == 8 || inputDni.val() == "admin"){
      inputPassword.removeAttr('disabled');
      inputPassword.focus();
    }
    else
      inputPassword.attr('disabled','false');
  };
  const ValidateUser = () =>{
    getUserDni(inputDni.val()).then((response) =>{
      state.user = response;
      if(inputDni.val() == "admin" && inputPassword.val()  == 'admin'){
        state.page = 5;
        update();
      }else if(response != null && inputPassword.val() == '123456'){
        state.page = 2;
        update();
      }else {
        // container.append(error);
      }
    });
  }

  inputDni.on({
    // keypress: ValidateNumber,
    keyup: activarCheck
  });

  inputPassword.on({
    keypress:activarCheck,
    keyup:ValidateUser
  });


  return section;
}