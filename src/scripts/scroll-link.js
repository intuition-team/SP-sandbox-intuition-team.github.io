import $, { each } from "jquery";

const ready = function() {
  $(".js-scroll-link").click(function(e) {
    e.preventDefault();

    var linkOffset = -40;
    if ($($.attr(this, "href")).data("scroll-link-offset")) {
      linkOffset += $($.attr(this, "href")).data("scroll-link-offset");
    }

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top + linkOffset
      },
      500
    );
  });
};

$(document).ready(ready);

// parallax

// $(window).scroll(function() {
//   const 
//     a = $(this).scrollTop(),
//     b = 500,
//     t = window.pageYOffset;
  
//   $(".parallax").css('transform', 'translate(-' + a / 1.6 + 'px, -' + 1 - a / b + 'px)');
//     $(".one").css('bottom', -(t * 0.3) + 'px');
//     $(".img-parallax").css('bottom', -(t * 0.1) + 'px');
//     $(".three").css('bottom', -(t * 0.5) + 'px');
//     $(".four").css('bottom', -(t * 0.6) + 'px');
//     $(".five").css('bottom',-(t * 0.7) + 'px');
  
// });

// $(".header-parallax").on('mousemove', (e) => {
//   const cx = $(window).width() / 2,
//         cy = $(window).height() / 4,
//         x = ((cx - e.pageX) / cx) * 1,
//         y = ((cy - e.pageY) / cy) * 4;
//   $(".img-parallax").css('transform',`translate(${x}px, ${y}px)`);
  
// });


// parallax2

$(window).scroll(function() {
  const 
    a = $(this).scrollTop(),
    b = 500,
    t = window.pageYOffset;
  
  $(".parallax").css('transform', 'translate(-' + a / 1.6 + 'px, -' + 1 - a / b + 'px)');
    $(".one").css('bottom', -(t * 23) + 'px');
    $(".img-parallax").css('bottom', -(t * 31) + 'px');
    $(".three").css('bottom', -(t * 15) + 'px');
    $(".four").css('bottom', -(t * 16) + 'px');
    $(".five").css('bottom',-(t * 17) + 'px');
  
});

$(".header-parallax").on('mousemove', (e) => {
  const cx = $(window).width() / 2,
        cy = $(window).height() / 4,
        x = ((cx - e.pageX) / cx) * 1,
        y = ((cy - e.pageY) / cy) * 24;
  $(".img-parallax").css('transform',`translate(${x}px, ${y}px)`);
  
});

