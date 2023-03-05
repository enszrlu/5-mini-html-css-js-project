let downButton = document.querySelector('.down-button');
let upButton = document.querySelector('.up-button');
let textSlide = document.querySelector('.text-slide');
let picSlide = document.querySelector('.pic-slide');
const slidesLength = picSlide.querySelectorAll('div').length;
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
let activeSlideIndex = 0;

downButton.addEventListener('click', () => moveSlide('down'));

upButton.addEventListener('click', () => moveSlide('up'));

picSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

function moveSlide(direction) {
    if (direction == 'up') {
        activeSlideIndex++;
        console.log('in UP');
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    }
    if (direction == 'down') {
        activeSlideIndex--;
        console.log('in down');
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }
    picSlide.style.transform = `translateY(${activeSlideIndex * vh}px)`;
    textSlide.style.transform = `translateY(-${activeSlideIndex * vh}px)`;
}
