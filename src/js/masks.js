import Inputmask from 'inputmask';
export default function masks() {
    // const decimalInputs = Array.from(document.querySelectorAll('.js-decimal-input'));

    // decimalInputs.forEach(input => {
    //     function validate(el, evnt) {
    //         var charC = evnt.which ? evnt.which : evnt.keyCode;
    //         if (charC == 46) {
    //             if (el.value.indexOf('.') === -1) {
    //                 return true;
    //             } else {
    //                 evnt.preventDefault();
    //                 return false;
    //             }
    //         } else {
    //             if (charC > 31 && (charC < 48 || charC > 57)) {
    //                 evnt.preventDefault();
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }

    //     input.addEventListener('keypress', event => {
    //         validate(input, event)
    //     });
    // });
    const decimalInputs = Array.from(document.querySelectorAll('.js-decimal-input'));

    decimalInputs.forEach(input => {
        function isNumberKey(evt, el) {
            var charCode = evt.which ? evt.which : event.keyCode;
            var number = el.value.split(',');
            var caracter = el.value;

            if (charCode != 44 && charCode > 31 && (charCode < 48 || charCode > 57)) {
                evt.preventDefault();
                return false;
            }

            if (charCode == 44 && caracter == '') {
                evt.preventDefault();
                return false;
            }

            if (charCode == 44 && caracter.indexOf(',') != -1) {
                evt.preventDefault();
                return false;
            }

            //get the carat position
            // var caratPos = getSelectionStart(el);
            // var dotPos = el.value.indexOf(',');
            // if (caratPos > dotPos && dotPos > -1 && number[1].length > 1) {
            //     evt.preventDefault();
            //     return false;
            // }
            return true;
        }

        // function getSelectionStart(o) {
        //     if (o.createTextRange) {
        //         var r = document.selection.createRange().duplicate();
        //         r.moveEnd('character', o.value.length);
        //         if (r.text == '') return o.value.length;
        //         return o.value.lastIndexOf(r.text);
        //     } else return o.selectionStart;
        // }

        input.addEventListener('keypress', event => {
            isNumberKey(event, input);
        });
    });

    const phoneInputs = Array.from(document.querySelectorAll('.js-phone-input'));

    phoneInputs.forEach(input => {
        const instance = new Inputmask({ mask: '+7 (999) 999-99-99' });
        instance.mask(input);
    });

    const onlyNumericInputs = Array.from(document.querySelectorAll('.js-numeric-input-decimals'));

    onlyNumericInputs.forEach(input => {
        input.addEventListener('input', () => {
            const value = input.value;
            const newCleanedValue = parseInt(value.replace(/[^\d]+/g, ''), 10);
            if (isNaN(newCleanedValue)) {
                input.value = '';
            } else {
                input.value = newCleanedValue.toLocaleString();
            }
        });
    });

    const onlyNumericInputsNoFormatting = Array.from(document.querySelectorAll('.js-numeric-input'));

    onlyNumericInputsNoFormatting.forEach(input => {
        input.addEventListener('input', () => {
            const value = input.value;
            const newCleanedValue = parseInt(value.replace(/[^\d]+/g, ''), 10);
            if (isNaN(newCleanedValue)) {
                input.value = '';
            } else {
                input.value = newCleanedValue;
            }
        });
    });
}
