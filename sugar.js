
const buttonRight = document.getElementById('right-click');
const buttonLeft = document.getElementById('left-click');
const slider = document.getElementById('slider');

let leftProductId = 0;
const maxItemPerViewport = 3;

buttonRight.addEventListener('click', () => {
    leftProductId++;
    const leftElemWidth = document.getElementById(`product-${leftProductId}`).offsetWidth;
    slider.scrollTo({
        top: 0,
        left: (leftElemWidth + 30) * leftProductId,
        // behavior: 'smooth'
    });
});

buttonLeft.addEventListener('click', () => {
    if (leftProductId > 0) {
        leftProductId--;
        const leftElemWidth = document.getElementById(`product-${leftProductId}`).offsetWidth;
        slider.scrollTo({
            top: 0,
            left: (leftElemWidth + 30) * leftProductId,
            // behavior: 'smooth'
        });
    }
});