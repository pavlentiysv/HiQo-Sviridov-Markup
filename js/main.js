function initSlider() {
  DataService.getHomeSlides()
    .then(TemplateService.drawHomeSlides)
    .then(() => new Slider('home-slider', false, true))
    .then(() => new Slider('blog-slider-container', true, false));
}

function getAndDrawPortfolios() {
  DataService.getPortfolios()
    .then(TemplateService.drawPortfolios);
}

document.addEventListener('DOMContentLoaded', initSlider);
document.addEventListener('DOMContentLoaded', getAndDrawPortfolios);
