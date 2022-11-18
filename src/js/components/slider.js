import Swiper, { Navigation, Pagination, Grid } from 'swiper';
import helpers from '../helpers';

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

var init = false;
let clientSlider;

function swiperCard() {
  if (window.innerWidth >= 768) {
    if (!init) {
      init = true;
      clientSlider = new Swiper('.clients .swiper', {
        modules: [Navigation, Pagination],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.clients .swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.clients .swiper-button-next',
          prevEl: '.clients .swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 5,
          }
        }
      });
    }
  } else if (init) {
    clientSlider.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);