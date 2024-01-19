// category-slider

$(".banner-carousel").owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: false,
  dots: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
});

/*-------------------
    magnifiq popup JS
  ----------------------*/
$(".gallery-single").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
});
$(".video-play").magnificPopup({
  type: "iframe",
  removalDelay: 300,
  mainClass: "mfp-fade",
});

jQuery(window).on("load", function () {
  // WOW JS
  new WOW().init();
});
