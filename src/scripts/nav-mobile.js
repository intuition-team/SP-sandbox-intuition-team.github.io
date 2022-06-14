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







$('.img-parallax').each(function(){

  // Задание: поменять местами родителя и ребёнка, прогонять each по родителям

  var img = $(this);
  var imgParent = $(this).parent();
  
  function parallaxImg () {

    // Задание: переосмыслить математику, считать по-своему
    
    var speed = img.attr('data-speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }

    img.css({
      // top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  
  
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
  
  
});