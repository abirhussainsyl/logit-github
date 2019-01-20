jQuery.noConflict();
(function( $ ) {
  $(function() {
    $('.client-slider').owlCarousel({
      loop: true,
      margin: 40,
      dots: false,
      nav: true,
      autoplay:true,
      navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
      responsive: {
        300:{
          items: 1,
        },
        600:{
          items:1,

        },
        850:{
          items:1,

        },
        1000: {
          items:2,

        }
      }
    });



        $('.blog-slider').owlCarousel({
      loop: true,
      margin: 40,
      dots: true,
      autoplay:true,
      responsive: {
        0:{
          items: 1,
        },
        400:{
          items:1

        },
        600:{
          items:1,

        },
        700:{
          items:2,

        },
        800:{
          items:2,

        },
        1000: {
          items:3,

        }
      }
    });
  });
})(jQuery)



