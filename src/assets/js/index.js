'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch(state.page) {
    case 0:
      wrapper.append(Welcome(_=>{ render(root) }));
      break;
    case 1:
      wrapper.append(Login(_=>{ render(root) }));
      break;
    case 2:
      wrapper.append(Perfil(_=>{ render(root) }));
      break;
    case 3:
      wrapper.append(Salir(_=>{ render(root) }));
      root.append(wrapper);
      $('.carousel').carousel('');
      setInterval(function() {
        $('.carousel').carousel('next');
      }, 5000);
      break;
    case 4:
      wrapper.append(User(_ => render(root)));
      root.append(wrapper);
      $('.carousel.carousel-slider').carousel({fullWidth: true});

      // wrapper.append(User(_ => render(root)));
    // wrapper.append(StateUser());
    // wrapper.append(Family());
    // wrapper.append(MoreInfo());
      break;
    case 5:
      wrapper.append(Reporte(_=>{ render(root) }));
      break;
    case "next":
  }
  root.append(wrapper);
  // $('.carousel').carousel({fullWidth: true});
  // setInterval(function() {
  //   $('.carousel').carousel('next');
  // }, 5000);
};

const state = {
  page: 0 ,
  data: null,
  selectUser:{},
  user: null,
  pesoActual: null
};

$(_ => {
  const root = $("#root");
  CargarData().then((response)=>{
    state.data = response;
  });

  render(root);
  $('.timepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control mon
		selectYears: 15, // Creates a dropdown of 15 years to control year,
		today: 'Today',
		clear: 'Clear',
		close: 'Ok',
		closeOnSelect: false // Close upon selecting a date,
	});
  //$('.carousel.carousel-slider').carousel({fullWidth: true});


});

