function initSlider() {
  DataService.getSlides()
    .then(drawHomeSlides)
    .then(() => new Slider('home-slider', false, true));
}

document.addEventListener('DOMContentLoaded', initSlider);

new Slider('blog-slider-container', true, false);
