'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

	switch(state.screenView) {
    case null:
      wrapper.append(User(_ => render(root)));
			//wrapper.append(StateUser(_ => render(root)));
			//wrapper.append(Family(_ => render(root)));
			//wrapper.append(MoreInfo(_ => render(root)));
      break;
		case "next":
	}

  root.append(wrapper);
}

const state = {
	screenView: null
};

$( _ => {

	const root = $('.root');
	render(root);
	//Funcion para input calendario
	$('.timepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control mon
		selectYears: 15, // Creates a dropdown of 15 years to control year,
		today: 'Today',
		clear: 'Clear',
		close: 'Ok',
		closeOnSelect: false // Close upon selecting a date,
	});
	$('.carousel.carousel-slider').carousel({fullWidth: true});

});
