import Swiper, { Navigation, Pagination, Grid } from 'swiper';

// init swiper slider
const servicesSlider = new Swiper('.services-section .swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 0,
  pagination: {
    el: '.services-section .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.services-section .swiper-button-next',
    prevEl: '.services-section .swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});