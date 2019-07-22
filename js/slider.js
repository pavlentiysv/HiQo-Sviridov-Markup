function Slider(sliderId, isMoreThanOneSlide, isDotsRequired) {
  this.isMoreThanOneSlide = isMoreThanOneSlide;
  this.isDotsRequired = isDotsRequired;
  this.index = 0;
  this.box = document.getElementById(sliderId);
  this.slidesBox = this.box.querySelector('.slides');
  this.slides = this.slidesBox.getElementsByClassName('slide');
  this.arrows = this.box.getElementsByClassName('slider__arrow');
  if (isMoreThanOneSlide) {
    this.slideSize = this.slidesBox.querySelector('.slide').clientWidth;
  } else {
    this.slideSize = this.box.clientWidth;
  }
  this.slidesBox.style.width = `${this.slideSize * this.slides.length}px`;

  this.carousel();

  if (this.isDotsRequired) {
    this.createDots();
  }
}

Slider.prototype.createDots = function sliderCreateDots() {
  const that = this;
  const dotsDiv = document.createElement('div');
  dotsDiv.className = 'slider__dots';
  for (let i = 0; i < that.slides.length; i += 1) {
    dotsDiv.innerHTML += `<a class="slider__dot" data-index="${i}"></a>`;
  }
  that.dots = dotsDiv.getElementsByClassName('slider__dot');
  that.dots[that.index].className += ' slider__dot_active';

  dotsDiv.onclick = function delegateEvent(event) {
    const index = event.target.getAttribute('data-index');
    that.slidesBox.style.transform = `translateX(${-that.slideSize * index}px)`;
    that.slidesBox.style.transition = '0.3s ease-in-out';
    for (let i = 0; i < that.dots.length; i += 1) {
      that.dots[i].className = that.dots[i].className.replace(
        'slider__dot_active',
        ''
      );
    }
    that.dots[index].className += ' slider__dot_active';
  };

  that.box.append(dotsDiv);
};

Slider.prototype.carousel = function sliderCarousel() {
  const that = this;
  that.arrows[0].addEventListener('click', Slider.previous.bind(null, that));
  that.arrows[1].addEventListener('click', Slider.next.bind(null, that));
};

Slider.previous = function previousSlide(box) {
  const boxx = box;
  boxx.slidesBox.style.transition = '0.3s ease-in-out';
  if (boxx.index > 0) {
    boxx.index -= 1;
  }

  if (boxx.isDotsRequired) {
    for (let i = 0; i < boxx.dots.length; i += 1) {
      boxx.dots[i].className = boxx.dots[i].className.replace(
        'slider__dot_active',
        ''
      );
    }
    boxx.dots[boxx.index].className += ' slider__dot_active';
  }

  boxx.slidesBox.style.transform = `translateX(${-boxx.slideSize *
    boxx.index}px)`;
};

Slider.next = function nextSlide(box) {
  const boxx = box;
  let max = 0;
  const sliderVisibleSize = document.querySelector('.blog-slider__slides')
    .clientWidth;
  boxx.slidesBox.style.transition = '0.3s ease-in-out';
  // checking wrapper size to prevent extra movement
  if (boxx.isMoreThanOneSlide) {
    if (sliderVisibleSize >= 1200) {
      max = boxx.slides.length - 3;
    } else if (sliderVisibleSize >= 800) {
      max = boxx.slides.length - 2;
    } else {
      max = boxx.slides.length - 1;
    }
  } else {
    max = boxx.slides.length - 1;
  }

  if (boxx.index < max) {
    boxx.index += 1;
  }

  if (boxx.isDotsRequired) {
    for (let i = 0; i < boxx.dots.length; i += 1) {
      boxx.dots[i].className = boxx.dots[i].className.replace(
        'slider__dot_active',
        ''
      );
    }
    boxx.dots[boxx.index].className += ' slider__dot_active';
  }

  boxx.slidesBox.style.transform = `translateX(${-boxx.slideSize *
    boxx.index}px)`;
};

new Slider('home-slider', false, true);
new Slider('blog-slider-container', true, false);
