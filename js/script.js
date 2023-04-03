$(document).ready(function () {
  $('.dropdown-toggle').dropdown();

  //Cerrar dropdown después de hacer clic en un enlace
  $('.dropdown-menu a').on('click', function () {
    $('.dropdown-toggle').dropdown('hide');
    $('.navbar-collapse').collapse('hide'); //Cierra el menú colapsado
  });

  //Cerrar navbar después de hacer clic en un enlace de nav-item
  $('.navbar-nav a').on('click', function () {
    var navLink = $(this);
    var dropdown = navLink.parent().hasClass('dropdown');

    if (!dropdown) {
      $('.navbar-collapse').collapse('hide');
    }
  });

  //Abrir y cerrar menú desplegable del nav-item de forma independiente
  $('.nav-item.dropdown .nav-link').on('click', function () {
    $('.nav-item.dropdown').toggleClass('show');
  });
});