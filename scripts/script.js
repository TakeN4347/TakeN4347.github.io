function scrollFunction() {

  if ($(document).scrollTop() < 548) {
    $('.navbar-fixed nav').addClass('no-shadow');
  } else {
    $('.navbar-fixed nav').removeClass('no-shadow');
  }
}

$(function() {

  $('.sidenav').sidenav();

  window.onscroll = function() {
    scrollFunction();
  };
});
