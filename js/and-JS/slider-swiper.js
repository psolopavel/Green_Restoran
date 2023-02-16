const swiper = new Swiper('.burger-images__slider', {
   loop: true,
   spaceBetween: 70,
   parallax: true,
   slidesPerView: 1,
   speed: 1200,
   navigation: {
      nextEl: '.burger-images__next',
      prevEl: '.burger-images__prev',
   },

});
const swiper2 = new Swiper('.main-swiper__slider', {
   loop: true,
   loopedSlides: 4,
   slidesPerView: 2,
   spaceBetween: 32,
   speed: 1200,
   navigation: {
      nextEl: '.main-swiper__next',
      prevEl: '.main-swiper__prev',
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   grabCursor: true,
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      570: {
         slidesPerView: 2,
         spaceBetweenSlides: 30
      },
      1075: {
         slidesPerView: 2,
      }
   }
});

