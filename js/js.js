'use strict'
var RADIO_BLOCK = document.querySelector('.background-radio');
var firstRadio = RADIO_BLOCK.querySelector('label:first-child .radio-custom');
var secondRadio = RADIO_BLOCK.querySelector('label:nth-child(2) .radio-custom');
var thirdRadio = RADIO_BLOCK.querySelector('label:last-child .radio-custom');
var iceCreamImage = document.querySelector('body');
var iceCreamTitle = document.querySelector('.main-image-description h2');
var firstBackgroundChange = function () {
    iceCreamImage.style.backgroundColor = '#9ab7a7';
    iceCreamImage.style.backgroundImage = 'url("png/background.png")';
    iceCreamTitle.textContent = 'Крем-брюле и пломбир с малиновым джемом';
};
var secondBackgroundChange = function () {
    iceCreamImage.style.backgroundColor = '#8c99a9';
    iceCreamImage.style.backgroundImage = 'url("png/background2.png")';
    iceCreamTitle.textContent = 'Шоколадный пломбир и лимонный сорбет';
};
var thirdBackgroundChange = function () {
    iceCreamImage.style.backgroundColor = '#9d8b84';
    iceCreamImage.style.backgroundImage = 'url("png/background3.png")';
    iceCreamTitle.textContent = 'Пломбир с помадкой и клубничный щербет';
};

firstRadio.addEventListener('click', firstBackgroundChange);
secondRadio.addEventListener('click', secondBackgroundChange);
thirdRadio.addEventListener('click', thirdBackgroundChange);