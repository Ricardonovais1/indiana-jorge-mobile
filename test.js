// Botão Play

const btnUp = document.querySelector('#up');
const btnDw = document.querySelector('#dw');
const btnArea = document.querySelector('.bottom-1');


btnArea.addEventListener('click', () => {
    btnUp.classList.toggle('hide')
    btnDw.classList.toggle('hide')
})

// Botão Confirmar

const confirmUp = document.querySelector('#conf-up');
const confirmDw = document.querySelector('#conf-dw');
const btnArea2 = document.querySelector('.bottom-2');


btnArea2.addEventListener('click', () => {
    confirmUp.classList.toggle('hide')
    confirmDw.classList.toggle('hide')
})

// Botão Aioros

const aiorosUp = document.querySelector('#aioros-up');
const aiorosDw = document.querySelector('#aioros-dw');
const btnArea3 = document.querySelector('.bottom-3');


btnArea3.addEventListener('click', () => {
    aiorosUp.classList.toggle('hide')
    aiorosDw.classList.toggle('hide')
})



