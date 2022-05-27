function openResponsive(menu) {
  menu.classList.toggle('open');
}


const swiperHandler = () => {

  const swiper = new Swiper('.swiper', {
    autoplay: {
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
  //   const trigger = document.querySelector('#trigger');
  //   const modalWrapper = document.querySelector('.modal-wrapper');
  // trigger.addEventListener('click', function () { // add an e.prevent here to prevent anchor tag from diverting to links
  //     modalWrapper.classList.add('.active');
  //   })
}




document.addEventListener('DOMContentLoaded', swiperHandler);

// onPage load magnific popup

$(window).load(function () {
  $.magnificPopup.open({
    items: { src: '#second-popup' }, type: 'inline'
  }, 0);
});

//End onPage load magnific popup


$(document).ready(function () {

  // $('test-popup').magnificPopup({type:'inline'});

  // $('.test-popup-link').magnificPopup({
  //   type:'image',
  //   midClick: true 
  // });

  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

});


 $(document).ready(function() {

  // $('.image-popup').magnificPopup({
	// 	type: 'image',
	// 	closeOnContentClick: true,
	// 	mainClass: 'mfp-img-mobile',
	// 	image: {
	// 		verticalFit: true
	// 	}
		
	// });


  // $('.image-popup').magnificPopup({
	// 	type: 'image',
	// 	closeOnContentClick: true,
	// 	image: {
	// 		verticalFit: false
	// 	}
	// });


$('.image-popup').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  fixedContentPos: true,
  mainClass: ' mfp-with-zoom', // class to remove default margin from left and right side
  image: {
    verticalFit: true
  },
  zoom: {
    enabled: true,
    duration: 600 // don't foget to change the duration also in CSS
  }
});

 });



	