$(function() {
  console.log('Hello Bootstrap5');
});



// <!-- Initialize Swiper -->
var swiper = new Swiper(".ClassSwiper", {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
    speed: 1500,
    loop: true,
    spaceBetween: 8,
    slidesPerView: "auto",
    grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 
var swiper = new Swiper('.abilitySwiper', {
  // Optional parameters
  effect: 'fade',
  loop: true,
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.material-icons',
    prevEl: '.material-icons',
  },
});

//
var swiper = new Swiper(".AllClassSwiper", {
  centeredSlides: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
    speed: 1500,
    spaceBetween: 8,
    slidesPerView: "auto",
    grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});