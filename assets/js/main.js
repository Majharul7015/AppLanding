(function($) {
    "use strict";
    $(document).ready(function() {

      // mean-menu
       $('nav').meanmenu({
       		meanMenuContainer: '.menu-area',
       		meanScreenWidth: "991",
       		onePage: true
       });

// sticky menu
       $("header").sticky();


// ui-tabs
if (typeof tabs == "function") {
    $( "#tabs" ).tabs({
    show:{effect:"blind",duration:800}
  });}





  // tiny slider app user
if (typeof tns == "function") {
         var slider = tns({
    container: '#my-slider',
    // mode: 'gallery',
    axis: "vertical",
    // loop:false;
    // autoHeight: true,
    // autoWidth: true,
    controlsText: ["<i class='fas fa-chevron-up'></i>", "<i class='fas fa-chevron-down'></i>"],
    // prevButton:true,
    // arrowKeys:true,
    // autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1000,
    // autoplayText: ["▶", "❚❚"],
    mouseDrag: true,
    items: 1,
    responsive: {
      320: {
        edgePadding: 20,
        gutter: 20,
        items: 1
      },
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
  });
       }

         // swiper slider app screenshot


         
    var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView:5,
    autoplay:true,
  })



    // clients-slider
if (typeof tns == "function") {
        var slider2 = tns({
            container: '.clients-slider',
            // swipeAngle: false,
            items: 1,
            speed: 400,
            mouseDrag: true,
            controls: false,
            // pagination: {
            // el: '.swiper-pagination',
            // },
            //controlsText: ["<i class='fas fa-chevron-up'></i>", "<i class='fas fa-chevron-down'></i>"],
            nav: true,
            navPosition: 'bottom',
            // responsive: {
            //     640: {
            //         edgePadding: 20,
            //         gutter: 20,
            //         items: 2
            //     },
            //     700: {
            //         gutter: 30
            //     },
            //     900: {
            //         items: 1
            //     }
            // }
        }); }


// bd-releted-post
    // var swiper2 = new Swiper('.bd-swiper-container', {
    //   loop:true,
    //   slidesPerView:2,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });












    });

    $(window).on('load', function() {

    });
})(jQuery)