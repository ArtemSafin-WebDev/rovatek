import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function certificates() {
    const elements = Array.from(document.querySelectorAll('.js-certificates'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');
        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            speed: 500,
            threshold: 5,
            navigation: {
                nextEl: element.querySelector('.certificates__arrow--next'),
                prevEl: element.querySelector('.certificates__arrow--prev'),
            },
            breakpoints: {
                641: {
                    slidesPerView: 4,
                    spaceBetween: 35,
                }
            }
        });
    })
}