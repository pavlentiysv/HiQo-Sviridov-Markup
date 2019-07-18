const slides = document.getElementsByClassName('slider_slide');
const sliderContent = document.getElementById('home-slider');

//creating dots

let dotsDiv = document.createElement('div');
dotsDiv.className = 'slider__dots';
for (let i = 0; i < slides.length; i++) {
  dotsDiv.innerHTML += `<a class="slider__dot" onclick="currentSlide(${i +
    1})"></a>`;
}
sliderContent.append(dotsDiv);

//

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i = 0;
  const dots = document.getElementsByClassName('slider__dot');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('slider__dot_active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' slider__dot_active';
}
