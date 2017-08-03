const Login = (update) => {
    const wrap = $('<section class="login"></section>'),
        header_desk = $('<header class="login__header--desktop hide-on-small-only"></header>'),
        header_desk_container = $('<div class="container"></div>'),
        desk_logo = $('<img src="assets/img/reto-power-white.png" alt="Reto Power Logo">'),
        desk_btn = $('<button>¡REGISTRATE!</button>'),
        mob_logo = ('<img class="hide-on-large-only" src="assets/img/reto-power.png" alt="Reto Power Logo" height="60">'),
        container = $('<div class="container center"></div>'),
        phrase = $('<p class="hide-on-small-only center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Nullam id ornare ex. Donec laoreet lectus ex, non accumsan nulla facilisis vitae.</p>'),
        user_icon = $('<i class="fa fa-user-o"></i>'),
        key_icon = $('<i class="fa fa-key"></i>'),
        divDni = $('<div class="login__form--id input-field col s6"></div>'),
        divPassword = $('<div class="login__form--key input-field col s6"></div>'),
        inputDni = $('<input placeholder="DOCUMENTO DE IDENTIDAD" id="loginDni" type="text" class="validate center-align">'),
        inputPassword = $('<input placeholder="CONTRASEÑA" id="loginPassword" disabled type="password" class="validate center-align">'),
        register_btn = $('<button class="login__form--loginbtn">INGRESA</button>'),
        register_p = $('<p class="login__form--register">¿Aún no te registras? <a href="#">Crea una cuenta</a></p>'),
        error = $('<span class="red-text">Error en usuario</span>');

    wrap.append(header_desk, container);
    header_desk_container.append(desk_logo, desk_btn);
    header_desk.append(header_desk_container);

    container.append(phrase);

    divDni.append(inputDni, user_icon);
    divPassword.append(inputPassword, key_icon);
    container.append(mob_logo, divDni, divPassword, register_btn, register_p);

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
    });

    return wrap;
};