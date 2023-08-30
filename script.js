new Swiper ('.image-slider', {
    navigation: {
        nextE1: '.swiper-button-next',
        prevtE1: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable:true,
    }, 

    simulateTouch: true,
    touchRatio:1,
    touchAngle: 45,
    grabCursor: true,

    keyboard: {
        enabled: true,
        pageUpDown: true,
    },
    autoHeight: true,
    slidesPerView: 3,
    watcheOverflow: true, 

    spaceBetween: 30,
    slidesPerGroup: 3,
});