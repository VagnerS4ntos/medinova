$(document).ready(function () {
  let owl = $('.owl-carousel');

  owl.owlCarousel(
    {
      items: 3,
      loop: true,
      margin: 20,
      nav: true,
      navText: ['<i class="fas fa-arrow-right"></i>', '<i class="fas fa-arrow-left"></i>'
      ],
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    }
  );
});



$(".team-carousel, .related-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  margin: 45,
  dots: false,
  loop: true,
  nav: true,
  navText: [
    '<i class="bi bi-arrow-left"></i>',
    '<i class="bi bi-arrow-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    992: {
      items: 2
    }
  }
});

