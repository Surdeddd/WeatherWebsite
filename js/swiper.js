const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});
