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
  const progreso = parseInt(state.user.INDICADOR_PROGRESO) - parseInt(state.user.META_PESO);
  const section = $('<section class="salir__bg"><img src="assets/img/logo-white.png" alt="" class="logo-white"></section>');
  const header = $('<div class="deep-purple lighten-1 white-text perfil">Salir</div><br>');
	const container = $('<div id="salir" class="container center"></div>');

	const rowImage = $('<div class="logo"></div>');
  const divFalta = $('<div class="col s6"></div>');
  const falta = $('<h3>'+progreso+'Kg</h3>');
  const p = $('<p><i>¡Persiste que podrás!</i></p>');
  const titleInfo = $('<h3>Información Útil</h3>');

  const carrucel = $(`<div class="carousel carousel-slider center" data-indicators="true"></div>`);
  const item1 = ItemCarousel('http://cdn2.foodviva.com/static-content/food-images/juice-recipes/carrot-apple-ginger-juice-recipe/carrot-apple-ginger-juice-recipe-250.jpg','Toma jugos en lugar de gaseosas','one');
  const item2 = ItemCarousel('http://images.media-allrecipes.com/userphotos/250x250/00/82/88/828805.jpg','Las ensaladas no solo te aportan agua, también nutrientes','two');
  const item3 = ItemCarousel('https://s3-media2.fl.yelpcdn.com/bphoto/mTJBGiaJtqz16vX3o8XFyQ/ls.jpg','Siempre realizar actividad física es fundamental para una vida sana','three');

carrucel.append(item1);
carrucel.append(item2);
carrucel.append(item3);

	divFalta.append(falta,p);
  container.append(carrucel);

	container.append(divFalta);


	section.append(header,container);

  return section;
}
