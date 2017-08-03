const Login = (update) => {
    const wrap = $('<section class="login"></section>'),
        header_desk = $('<header class="login__header--desktop hide-on-small-only"></header>'),
        header_desk_container = $('<div class="container"></div>'),
        desk_logo = $('<img src="assets/img/reto-power-white.png" alt="Reto Power Logo">'),
        desk_btn = $('<button>¡REGISTRATE!</button>'),
        mob_logo = ('<img class="hide-on-large-only" src="assets/img/reto-power-white.png" alt="Reto Power Logo">'),
        container = $('<div class="container center"></div>'),
        phrase = $('<p class="hide-on-small-only center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Nullam id ornare ex. Donec laoreet lectus ex, non accumsan nulla facilisis vitae.</p>'),
        form = $('<form  id="login"></form>'),
        user_icon = $('<i class="fa fa-user-o" ></i>'),
        key_icon = $('<i class="fa fa-key"></i>'),
        divDni = $('<div class="input-field col s6">'),
        divPassword = $('<div class="input-field col s6">'),
        inputDni = $('<input placeholder="Ingrese Dni" id="loginDni" type="text" class="validate center-align">'),
        inputPassword = $('<input placeholder="Ingrese Password" id="loginPassword" disabled type="password" class="validate center-align">'),
        labelDni = $('<h4 for="loginDni" class="blue-text">DNI Number</h4>'),
        labelPassword = $('<h4 for="loginPassword" class="blue-text">Password</h4>'),
        error = $('<span class="red-text">Error en usuario</span>');

    wrap.append(header_desk, mob_logo, container);
    header_desk.append(header_desk_container);
    header_desk_container.append(desk_logo, desk_btn);
    container.append(phrase, form);
    divDni.append(labelDni, inputDni);
    divPassword.append(labelPassword, inputPassword);
    container.append(divDni, divPassword);


    //const section = $('<section class="login__bg"></section>');
    // const container = $('<div id="login" class="container center"></div>');

    //const rowImage = $('<div class="logo"></div>');
    //const divDni = $('<div class="input-field col s6">');
    //const divPassword = $('<div class="input-field col s6">');

    //const inputDni = $('<input placeholder="Ingrese Dni" id="loginDni" type="text" class="validate center-align">');
    //const inputPassword = $('<input placeholder="Ingrese Password" id="loginPassword" disabled type="password" class="validate center-align">');

    //const labelDni = $('<h4 for="loginDni" class="blue-text">DNI Number</h4>');
    //const labelPassword = $('<h4 for="loginPassword" class="blue-text">Password</h4>');
    //const error = $('<span class="red-text">Error en usuario</span>');

    /*divDni.append(labelDni, inputDni);
    divPassword.append(labelPassword, inputPassword);*/

    //container.append(rowImage, divDni, divPassword);
    /*container.append(divDni, divPassword);*/

    //section.append(container);
    /*
        const activarCheck = _ => {
            if (inputDni.val().length == 8) {
                inputPassword.removeAttr('disabled');
                inputPassword.focus();

            } else
                inputPassword.attr('disabled', 'false');
        };

        const ValidateUser = () => {
            getUserDni(inputDni.val()).then((response) => {
                state.user = response;
                if (response != null && inputPassword.val() == '123456') {
                    state.page = 2;
                    update();
                } else {
                    // container.append(error);
                }
            });
        }

        inputDni.on({
            keypress: ValidateNumber,
            keyup: activarCheck
        });

        inputPassword.on({
            keypress: activarCheck,
            keyup: ValidateUser
        });*/


    return wrap;
}