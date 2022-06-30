import { Swiper, Navigation, EffectFade } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, EffectFade]);

export default function productImagesSlider() {
    if (!IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-product-images-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            speed: 500,

        });
    });
}
