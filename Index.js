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

function switchtoEN() {
    window.location.href = "Index.html";
}
function switchtoAr() {
    window.location.href = "IndexAR.html";
}



console.log("eeeee")





