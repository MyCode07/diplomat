import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
                breakpoints: {
                    300: {
                    },
                    768: {
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
                        Autoplay
                    ],
                    spaceBetween: 10,
                    slidesPerView: 'auto',
                    autoplay: {
                        delay: 4000,
                        pauseOnMouseEnter: true
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

        if (slider.closest('.info')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                pagination: {
                    el: pagination,
                    clickable: true
                },
                spaceBetween: 10,
                slidesPerView: 1,
            });
        }

        if (slider.closest('.other')) {
            new Swiper(slider, {
                slidesPerView: 'auto',

                breakpoints: {
                    300: {
                        spaceBetween: 10,
                    },
                    768: {
                        spaceBetween: 18,
                    }
                }

            });
        }

        if (slider.closest('.restourant-menu__list')) {
            new Swiper(slider, {
                modules: [Autoplay],
                slidesPerView: 'auto',
                spaceBetween: 10,
                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true
                }
            });
        }

        if (slider.closest('.about-page')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: pagination,
                    clickable: true
                },
            });
        }

        if (slider.closest('.early-booking')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: pagination,
                    clickable: true
                },
            });
        }

        if (slider.closest('.romantic')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: pagination,
                    clickable: true
                },
            });
        }

        if (slider.closest('.weekend') && window.innerWidth <= 1025) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: pagination,
                    clickable: true
                },
            });
        }
        if (slider.closest('.comfort')) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: pagination,
                    clickable: true
                },
            });
        }
    })
}
