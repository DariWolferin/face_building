(() => {
   window.onload = () => {
      let header__burger = document.querySelector('.header__icon');
      let header__menu = document.querySelector('.header__menu');
      let body = document.querySelector('body');
      header__burger.addEventListener('click', (e) => {
         header__burger.classList.toggle('active');
         header__menu.classList.toggle('active');
         body.classList.toggle('lock');
      })
   }
})();

let swiper = new Swiper('.slider__container', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   loop: true,
   autoplay: true,
   speed: 1500,
   effect: 'fade',
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
});
