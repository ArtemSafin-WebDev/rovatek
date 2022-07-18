export default function calculator() {
    const elements = Array.from(document.querySelectorAll('.js-calculator'));

    elements.forEach(element => {
        const wrappers = Array.from(element.querySelectorAll('.calculator__form-input-wrapper'));

        wrappers.forEach(wrapper => {
            const input = wrapper.querySelector('input');
            const setUnitValue = () => {
                const valueText = wrapper.querySelector('.calculator__form-units-value');

                valueText.textContent = input.value;
            };
            input.addEventListener('input', () => {
                setUnitValue();
            });
        });

        const consumption = element.querySelector('.js-consumption');
        const energyTariff = element.querySelector('.js-energy-tariff');
        const gasTariff = element.querySelector('.js-gas-tariff');
        const load = element.querySelector('.js-load')
        const energyCostsCurrent = element.querySelector('.js-energy-costs-current');
        const energyCostsPrognose = element.querySelector('.js-energy-costs-prognose');
        const newTariff = element.querySelector('.js-new-tariff');
        const saving = element.querySelector('.js-saving');
        const form = element.querySelector('form');
        const inputs = Array.from(element.querySelectorAll('input'));

        const calculate = () => {
            const consumptionCleaned = consumption.value.trim() ? parseFloat(consumption.value.replace(/\s/g, '')) : 0;
            const energyTariffCleaned = energyTariff.value.trim() ? parseFloat(energyTariff.value.replace(',', '.').replace(/\s/g, '')) : 0;
            const gasTariffCleaned = gasTariff.value.trim() ? parseFloat(gasTariff.value.replace(',', '.').replace(/\s/g, '')) : 0;
            const loadCleaned = load.value.trim() ? parseFloat(load.value.replace(/\s/g, '')) : 0;

            console.log({
                consumptionCleaned,
                energyTariffCleaned,
                gasTariffCleaned
            })
            const enCostCurrent = consumptionCleaned * energyTariffCleaned * (loadCleaned * 30);
            const enCostPrognose = consumptionCleaned * (loadCleaned * 30) * gasTariffCleaned * 0.31;
            energyCostsCurrent.textContent = enCostCurrent.toLocaleString();
            energyCostsPrognose.textContent = enCostPrognose.toLocaleString();
            newTariff.textContent = (gasTariffCleaned * 0.31).toLocaleString();
            saving.textContent = (enCostCurrent - enCostPrognose).toLocaleString();
        };

        calculate();

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                calculate();
            });
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            calculate();
        });
    });
}
