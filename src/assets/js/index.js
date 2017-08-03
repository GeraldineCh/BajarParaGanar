'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(StateUser());
    wrapper.append(Family());
    root.append(wrapper);
}

const state = {
    user: null,
};

$( _ => {
    const root = $('#root');
    render(root);
});