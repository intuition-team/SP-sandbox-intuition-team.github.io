import $ from 'jquery';


const ready = function() {

  
  $('.close-button').click(function(e) {
    e.preventDefault();
    $('.nav-mobile').removeClass('visible');
  });

  $('.burger').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.nav-mobile').addClass('visible');
  });

  $(window).on('click', function(e) {
    $('.nav-mobile').removeClass('visible');
  });

  $('.nav-mobile').click(function(e) {
    e.stopPropagation();
  });
};

$(document).ready(ready);