function slider(selector) {
    let slider = $(selector);
    let imgs = slider.children();

  slider
  .addClass('slider')
  .append('<a href="#" class="slider_arrow slider_arrow_left"></a>')
  .append('<div class="slider_slides"></div>')
  .append('<div class="slider_dots"></div>')
  .append('<a href="#" class="slider_arrow slider_arrow_right"></a>');

  let slides = slider.children('.slider_slides');
  let dots = slider.children('.slider_dots');

  imgs
  .prependTo(slides)
  .each(function (i) {
      if (i) {
          dots.append('<a href= "#" class="slider_dot slider_dot_active"></a>');

      }else{
          dots.append('<a href= "#" class="slider_dot">');
      }
  });
  .addClass('slider_slide')
  .eq(0);
  .addClass('slider_slide_active');
}
slider('#slider');