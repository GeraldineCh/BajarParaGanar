'use strict';
const ItemCarousel = (img,title,href) =>{
  const item = $('<div class="carousel-item white black-text" href="#'+href+'"></div>');
  const container = $('<div class="container"> </div>');
  const imagen = $('<img src="'+img+'" width="200"class="img-responsive secction">');
  const h2 = $('<h2>'+title+'</h2>');
  container.append(imagen,h2);
  item.append(container);
  return item;
};

const Salir = (update) => {
  console.log(state.user);
  const progreso = parseInt(state.user.PESO) - parseInt(state.user.INDICADOR_PROGRESO);
  const section = $('<section class="salir__bg"></section>');
	const container = $('<div id="salir" class="container center"></div>');

	const rowImage = $('<div class="logo"></div>');
  const divFalta = $('<div class="col s6"></div>');
  const falta = $('<h3>'+progreso+'Kg</h3>');
  const p = $('<p><i>¡Persiste que podrás!</i></p>');
  const titleInfo = $('<h3>Información Útil</h3>');

const carrucel = $(`<div class="carousel carousel-slider center" data-indicators="true"></div>`);
const item1 = ItemCarousel('https://lorempixel.com/250/250/nature/1','Paga a quien quieras desde donde quieras, sin efectivo','one');
const item2 = ItemCarousel('https://lorempixel.com/250/250/nature/1','Elige a quién pagar desde tu lista de contactos','two');
const item3 = ItemCarousel('https://lorempixel.com/250/250/nature/1','La transferencia es inmediata y gratuita de una cuenta a otra','three');

carrucel.append(item1);
carrucel.append(item2);
carrucel.append(item3);

	divFalta.append(falta,p);
  container.append(carrucel);

	container.append(divFalta);

	section.append(container);

  return section;
}
