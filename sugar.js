// function slider(selector) {
//     let slider = $(selector);
//     let imgs = slider.children();

//   slider
//   .addClass('slider')
//   .append('<a href="#" class="slider_arrow slider_arrow_left"></a>')
//   .append('<div class="slider_slides"></div>')
//   .append('<div class="slider_dots"></div>')
//   .append('<a href="#" class="slider_arrow slider_arrow_right"></a>');

//   let slides = slider.children('.slider_slides');
//   let dots = slider.children('.slider_dots');

//   imgs
//     .prependTo(slides)
//     .each(function (i) {
//         if (i) {
//             dots.append('<a href= "#" class="slider_dot slider_dot_active"></a>');

//         }else{
//             dots.append('<a href= "#" class="slider_dot">');
//         }
//     })
//     .addClass('slider_slide')
//     .eq(0)
//     .addClass('slider_slide_active');
// }
// slider('#slider');

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