$('.hamburger').click(function (e) {
  $(this).parent().find('ol').toggleClass('active');
  $(this).toggleClass('active');
  $('.dimmer').toggleClass('active');
  $('body').toggleClass('no-scrolling');
  $('.close-sidebar-mobile').toggleClass('active')
});

$('.close-sidebar-mobile').click(function () {
  $(this).parent().toggleClass('active');
  $('.dimmer').toggleClass('active');
  $('body').toggleClass('no-scrolling');
  $('.close-sidebar-mobile').toggleClass('active')
});