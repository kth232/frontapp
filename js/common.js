window.addEventListener("DOMContentLoaded", function(){
    const swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}); //메인 롤링 배너 js 코드(swiper.js 참고)
