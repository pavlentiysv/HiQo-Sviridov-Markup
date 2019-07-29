function drawHomeSlides(slidesData) {
  const rawTemplate = document.getElementById('home-slider-template').innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const ourGeneratedHTML = compiledTemplate(slidesData);
  const slidesContainer = document.querySelector('.slider__slides');
  slidesContainer.innerHTML = ourGeneratedHTML;
}

