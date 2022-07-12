import { num_word } from "./utils";

export default function numHours() {
    const elements = Array.from(document.querySelectorAll('.js-num-hours'));

    elements.forEach(element => {
        const input = element.querySelector('input');
        const text = element.querySelector('.calculator__form-form-input-units-text');

        const setTextValue = () => {
            text.textContent = num_word(Number(input.value), ['час', 'часа', 'часов'])
        }

        setTextValue();

        input.addEventListener('input', () => {
            setTextValue();
        })
    })
}