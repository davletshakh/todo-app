
const buttonRight = document.getElementById('right-click');
const buttonLeft = document.getElementById('left-click');
const slider = document.getElementById('slider');

let leftProductId = 0;

buttonRight.addEventListener('click', () => {
    //  debugger;
    leftProductId++;
    const leftElemWidth = document.getElementById(`product-${leftProductId}`).offsetWidth;
    const offsetLeft = (leftElemWidth + 30) * leftProductId;
    slider.scrollTo({
        top: 0,
        left: offsetLeft,
        behavior: 'smooth'
    });
});

buttonLeft.addEventListener('click', () => {
    if (leftProductId > 0) {
        leftProductId--;
        const leftElemWidth = document.getElementById(`product-${leftProductId}`).offsetWidth;
        slider.scrollTo({
            top: 0,
            left: (leftElemWidth + 30) * leftProductId,
            behavior: 'smooth'
        });
    }
});