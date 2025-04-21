document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    document.body.classList.add('show');
    menu.classList.toggle('show');
});
document.getElementById('closeMenu').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    document.body.classList.remove('show');
    menu.classList.remove('show');
});
const thumbSwiper = new Swiper(".thumb-swiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});

const mainSwiper = new Swiper(".main-swiper", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: thumbSwiper,
    },
});
const btn = document.getElementById('toggle-btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    text.classList.toggle('expanded');
    btn.textContent = text.classList.contains('expanded') ? 'See less' : 'See more';
});

// $(document).ready(function () {
//     var isRtl = $('html').attr('dir') === 'rtl';

//     $('.slider').slick({
//         dots: true,
//         rtl: isRtl,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         rows: 2,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         prevArrow: "<button class='prev'><img src='assets/Images/leftArrow.svg' alt='prevBtn'></button>",
//         nextArrow: "<button class='next'><img src='assets/Images/rightArrow.svg' alt='nextBtn'></button>",
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     rows: 1
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     rows: 1
//                 }
//             },
//         ]
//     });
// });
// $(document).ready(function () {
//     var isRtl = $('html').attr('dir') === 'rtl';
//     $('.slider2').slick({
//         rtl: isRtl,
//         slidesToShow: 4,
//         infinite: true,
//         prevArrow: "<button class='prev'><img src='assets/Images/leftArrow.svg' alt='prevBtn'></button>",
//         nextArrow: "<button class='next'><img src='assets/Images/rightArrow.svg' alt='nextBtn'></button>",
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             },
//         ]
//     });
// });












