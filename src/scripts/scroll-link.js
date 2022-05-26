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
