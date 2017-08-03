const Login = (update) => {
    const container = $('<section class="login"></section>'),
        header_desk = $('<header class="login__header--desktop hide-on-small-only"></header>'),
        header_desk_container = $('<div class="container"></div>'),
        desk_logo = $('<img src="assets/img/reto-power-white.png" alt="Reto Power Logo">'),
        desk_btn = $('<button>¡REGISTRATE!</button>'),
        mob_logo = ('<img class="hide-on-large-only" src="assets/img/reto-power1.png" alt="Reto Power Logo">'),
        content = $('<div class="container"></div>'),
        phrase = $('<p class="hide-on-small-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Nullam id ornare ex. Donec laoreet lectus ex, non accumsan nulla facilisis vitae.</p>'),
        form = $('<form></form>'),
        user_icon = $('<i class="fa fa-user-o" ></i>'),
        key_icon = $('<i class="fa fa-key"></i>');

    container.append(header_desk, mob_logo, content);
    header_desk.append(header_desk_container);
    header_desk_container.append(desk_logo, desk_btn);
    content.append(phrase, form);

    return container;
};