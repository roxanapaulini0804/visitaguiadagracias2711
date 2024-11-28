window.addEventListener("load", () => {

    var slider1 = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        loop: true,
        breakpoints: {
            // 760: {
            //     slidesPerView: 2,
            //     slidesPerColumn: 1
            // },
            999: {
                slidesPerView: 5,
                slidesPerColumn: 1
            },
            // 1280: {
            //     slidesPerView: 4,
            //     slidesPerColumn: 1
            // }
        }
    });
    
    var slider2 = new Swiper(".mySwiper2", {
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
        }
    });

    var slider3 = new Swiper(".mySwiper3", {
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3"
        },
        pagination: {
            el: ".swiper-pagination3",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet3 ' + className + '"></span>';
            }
        },
        loop: true,
        breakpoints: {
            760: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 3
            },
        }
    });

    var slider4 = new Swiper(".mySwiper4", {
        navigation: {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination4",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 1,
                slidesPerColumn: 1
            },
        }
    });

    var slider5 = new Swiper(".mySwiper5", {
        navigation: {
            nextEl: ".swiper-button-next5",
            prevEl: ".swiper-button-prev5"
        },
        pagination: {
            el: ".swiper-pagination5",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        loop: true,
        breakpoints: {
            760: {
                slidesPerView: 3,
                slidesPerColumn: 1
            }
        }
    });

    var slider6 = new Swiper(".mySwiper6", {
        navigation: {
            nextEl: ".swiper-button-next6",
            prevEl: ".swiper-button-prev6"
        },
        pagination: {
            el: ".swiper-pagination6",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        loop: true,
        breakpoints: {
            760: {
                slidesPerView: 3,
                slidesPerColumn: 1
            }
        }
    });

    var slider7 = new Swiper(".mySwiper7", {
        navigation: {
            nextEl: ".swiper-button-next7",
            prevEl: ".swiper-button-prev7"
        },
        pagination: {
            el: ".swiper-pagination7",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        loop: true,
        breakpoints: {
            760: {
                slidesPerView: 1,
                slidesPerColumn: 1
            }
        }
    });

//     let boton = document.querySelector('.bloqueFloat');

//    window.addEventListener("scroll", (e) => {

//         console.log(window.scrollY);





})


