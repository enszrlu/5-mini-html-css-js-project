let text = document.querySelector('#percentage');
let bg = document.querySelector('.bg-image');

let multiplier = 0;

let int = setInterval(blurring, 30);

function blurring() {
    multiplier++;

    if (multiplier > 99) {
        clearInterval(int);
    }
    text.innerHTML = `${multiplier}%`;

    text.style.opacity = scale(multiplier, 0, 100, 2, 0);
    bg.style.filter = `blur(${scale(multiplier, 0, 100, 50, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
