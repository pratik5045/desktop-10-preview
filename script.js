var swipe = new Swiper(".myswipe", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".ri-arrow-right-s-fill",
      prevEl: ".ri-arrow-left-s-fill",
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      375:{
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      425:{
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var swiperone = new Swiper(".myswiperone", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".ri-arrow-right-circle-fill",
      prevEl: ".ri-arrow-left-circle-fill",
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      375:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      425:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

