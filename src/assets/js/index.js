'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Reporte(_=>{ render(root) }));
  }else if(state.page == 1){
    wrapper.append(InicioSesion(_=>{ render(root) }));
  }else if (state.page == 2){
    wrapper.append(ChoiceOption(_=>{ render(root) }));
  }
  root.append(wrapper);
};

const state = {
  page: 0,
  data: null,
  selectUser:{}
};


$(_ => {
  // console.log(getUsers());
  const root = $("#root");
  render(root);
});
