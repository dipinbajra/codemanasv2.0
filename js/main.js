function openResponsive(menu) {
    menu.classList.toggle('open');
  }
  
  
const swiperHandler = () =>{

  const swiper = new Swiper('.swiper', {
    autoplay:{
      delay: 5000,
    },
    effect: "fade",
    loop: true,
   
    autoHeight: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
document.addEventListener('DOMContentLoaded', swiperHandler)