import $ from 'jquery';


$('.main-header__menu-toggle').click(function() {
  $('.menu-toggle').toggleClass('menu-toggle_active');
  $('.main-header__nav').toggleClass('is-open');
});
