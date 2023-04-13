// Botão Play

const btnUp = document.querySelector('#up');
const btnDw = document.querySelector('#dw');
const btnArea = document.querySelector('.bottom-1');


btnArea.addEventListener('click', () => {
    btnUp.classList.add('hide');
    btnDw.classList.remove('hide');
    setTimeout(() => {
        btnUp.classList.remove('hide');
        btnDw.classList.add('hide');
    }, 300);
})

// Botão Confirmar

const confirmUp = document.querySelector('#conf-up');
const confirmDw = document.querySelector('#conf-dw');
const confirmArea = document.querySelector('.confirm-area');
const nickInput = document.getElementById('nick');

nickInput.addEventListener('input', () => {
    if (nickInput.value.length == 3) {
        confirmUp.classList.remove('hide');
        confirmDw.classList.add('hide');
    }
});


confirmArea.addEventListener('click', () => {
    if (confirmDw.classList.contains('hide')) {
        confirmUp.classList.add('hide');
        confirmDw.classList.remove('hide');
        setTimeout(() => {
            confirmUp.classList.remove('hide')
            confirmDw.classList.add('hide')
        }, 300);
    }
});

// Botão Aioros

const aiorosUp = document.querySelector('#aioros-up');
const aiorosDw = document.querySelector('#aioros-dw');
const btnArea3 = document.querySelector('.bottom-3');


btnArea3.addEventListener('click', () => {
    aiorosUp.classList.add('hide');
    aiorosDw.classList.remove('hide');
    setTimeout(() => {
        aiorosUp.classList.remove('hide')
        aiorosDw.classList.add('hide')
    }, 300);
})



