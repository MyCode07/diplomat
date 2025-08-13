import Swiper from 'swiper';
import { Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        const prev = section.querySelector('.prev');
        const next = section.querySelector('.next');
        const pagination = section.querySelector('.pagination');

        if (slider.closest('.rooms')) {
            new Swiper(slider, {
                modules: [
                ],
                spaceBetween: 10,
                slidesPerView: 'auto',
            });
        }

        if (slider.closest('.offers')) {
            new Swiper(slider, {
                modules: [
                    Navigation
                ],
                spaceBetween: 10,
                slidesPerView: 'auto',
                centeredSlides: true,

                breakpoints: {
                    300: {
                        centeredSlides: false,
                        initialSlide: 0,

                    },
                    768: {
                        centeredSlides: true,
                        initialSlide: 2,
                    }
                }
            });
        }

        if (slider.closest('.restourant')) {

            if (slider.closest('.image')) {
                new Swiper(slider, {
                    modules: [
                        Pagination
                    ],
                    spaceBetween: 10,
                    slidesPerView: 1,
                    pagination: {
                        el: pagination,
                        clickable: true
                    }

                });
            }

            if (slider.closest('.restourant-contnet')) {
                new Swiper(slider, {
                    modules: [
                        Pagination
                    ],
                    spaceBetween: 10,
                    slidesPerView: 'auto',
                    pagination: {
                        el: pagination,
                        clickable: true
                    }
                });
            }
        }

        if (slider.closest('.conference')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                spaceBetween: 10,
                slidesPerView: 1,
                pagination: {
                    el: pagination,
                    clickable: true
                }
            });
        }

        if (slider.closest('.services')) {
            new Swiper(slider, {
                modules: [
                    Navigation
                ],
                spaceBetween: 10,
                slidesPerView: 1,
                navigation: {
                    prevEl: prev,
                    nextEl: next
                }
            });
        }
    })
}


