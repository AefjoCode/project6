const boxImg = document.querySelector('.boxImg');

const Brightness = document.querySelector('#Brightness');
const Contrast = document.querySelector('#Contrast');
const Grayscale = document.querySelector('#Grayscale');
const HueRotate = document.querySelector('#Hue-rotate');
const Invert = document.querySelector('#Invert');

const filters = [Brightness, Contrast, Grayscale, HueRotate, Invert];

filters.forEach((filter) => {
    filter.addEventListener('change', function() {
        boxImg.style.filter = `brightness(${Brightness.value}%) contrast(${Contrast.value}%) grayscale(${Grayscale.value}%) hue-rotate(${HueRotate.value}deg) invert(${Invert.value}%)`;
    });
});