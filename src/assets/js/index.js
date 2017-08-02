'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
	
	switch(state.screenView) {
    case null:
      wrapper.append(User(_ => render(root)));
      break;
		case "next":

	}
  root.append(wrapper);
}

const state = {
	screenView: null,
};

$( _ => {

	const root = $('.root');
	render(root);

});
