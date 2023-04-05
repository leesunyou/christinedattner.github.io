$(document).ready(function () {
  // menu on
  $(".ham_btn").click(function () {
    $(".on_menu").fadeIn(200);
  });
  $(".ham_btn_on").click(function () {
    $(".on_menu").fadeOut(200);
  });


  // slick slide
  $('.best_cont').slick({
    slidesToShow: 4,
    slidesToScoll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    arrows: true,
    responsive: [{
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});


AOS.init();