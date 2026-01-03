var screen1 = document.querySelector('.container .screen');
var buttons = document.querySelectorAll('.container .button-container button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.innerHTML === 'C') {
            screen1.innerHTML = '0';
            return;
        }
        if (btn.innerHTML === '=') {
            let result = Number(eval(screen1.innerHTML));
            screen1.innerHTML = Number.isInteger(result) ? result : result.toFixed(4);
            return;
        }
        screen1.innerHTML =
            screen1.innerHTML === '0'
                ? btn.innerHTML
                : screen1.innerHTML + btn.innerHTML;
    });
});