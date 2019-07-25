function createHomeSlides(slidesData) {
  const rawTemplate = document.getElementById('home-slider-template').innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const ourGeneratedHTML = compiledTemplate(slidesData);
  const slidesContainer = document.querySelector('.slider__slides');
  slidesContainer.innerHTML = ourGeneratedHTML;
}
const slidesRequest = new XMLHttpRequest();
slidesRequest.open('GET', '../assets/content/home-slider-content.json');
slidesRequest.onload = function f5() {
  const data = JSON.parse(slidesRequest.responseText);
  createHomeSlides(data);
};

slidesRequest.send();
