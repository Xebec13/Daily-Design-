// Initialize Swiper slider with looping, pagination, navigation, and responsive breakpoints
new Swiper('.swiper', {
    loop: true, // Enable continuous loop mode


    // Navigation arrows configuration
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints for different viewport widths
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});