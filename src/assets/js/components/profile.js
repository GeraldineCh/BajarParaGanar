const Perfil = (update) => {
    const section = $('<section class="perfil"></section>'),
        header = $('<header class="login__header--desktop"><div class="container"><img src="assets/img/reto-power-white.png" alt="Reto Power Logo" data-pin-nopin="true"><i class="fa fa-bars"></i></div></header>'),
        name = $('<p class="actualUser">Hola <strong>' + state.user.NOMBRES + '</strong>!</p>'),
        promesa = $('<br><div class="row"><h5 class="z-depth-1 col s12 m6 offset-m3" style="padding: 20px"><i>' + state.user.PROMESA + '</i></h5</div>'),
        rowPeso = $('<div class="perfi_peso"></div>'),
        pesoActual = $('<h5>Peso actual: <strong>' + state.user.INDICADOR_PROGRESO + '</strong></h5>'),
        pesoMeta = $('<h5>Peso meta: <strong>' + state.user.META_PESO + '</strong></h5>');

    rowPeso.append(pesoActual, pesoMeta);

    const btnUpdate = $('<button data-target="modal1" class="btn modal-trigger">Actualizar Peso</button>'),
        container = $('<div id="welcome" class="container"></div>'),
        rowBtn = $('<div class="welcome_btn contentButton row"></div>'),
        rowBtn1 = $('<div class="welcome_btn contentButton row"></div>'),
        btnSignUp = $('<button type="button" class="btn-welcome yellow waves-effect waves-light btn-large" name="button">Sign up</button>'),
        btnLogIn = $('<button type="button" class="btn-welcome yellow waves-effect waves-light btn-large" name="button">Log in</button>');

    container.append(name, promesa, rowPeso, btnUpdate);
    section.append(header);
    section.append(container);

    btnUpdate.on('click', (e) => {
        e.preventDefault();
        $('#modal1').modal();
        $('#newPeso').on({
            keypress: ValidateNumber,
        });
        $('#btnListo').on('click', (e) => {
            console.log($('#newPeso').val());
            if ($('#newPeso').val() != "") {
                updatePeso(state.user.NRO_DOCUMENTO, $('#newPeso').val());
                state.page = 3;
                update();
            }
        });
    });

    return section;
};