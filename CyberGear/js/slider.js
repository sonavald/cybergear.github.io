$(function(){
  $('.slider-inner').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: '<button id="prev" class="slider-button prev"></button>',
      nextArrow: '<button id="next" class="slider-button next"></button>',
      responsive: [
          {
              breakpoint: 1800,
              settings:{
                  slidesToShow: 4,
              },
          }
      ]
});
});
	