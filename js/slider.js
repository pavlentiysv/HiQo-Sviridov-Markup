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

  function delegateEvent(event) {
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
  }

  dotsDiv.addEventListener('click', delegateEvent);

  that.box.append(dotsDiv);
};

Slider.prototype.carousel = function sliderCarousel() {
  const that = this;
  that.arrows[0].addEventListener('click', Slider.previous.bind(null, that));
  that.arrows[1].addEventListener('click', Slider.next.bind(null, that));
};

Slider.previous = function previousSlide(box) {
  const copiedBox = box;
  copiedBox.slidesBox.style.transition = '0.3s ease-in-out';
  if (copiedBox.index > 0) {
    copiedBox.index -= 1;
  }

  if (copiedBox.isDotsRequired) {
    for (let i = 0; i < copiedBox.dots.length; i += 1) {
      copiedBox.dots[i].className = copiedBox.dots[i].className.replace(
        'slider__dot_active',
        ''
      );
    }
    copiedBox.dots[copiedBox.index].className += ' slider__dot_active';
  }

  copiedBox.slidesBox.style.transform = `translateX(${-copiedBox.slideSize *
    copiedBox.index}px)`;
};

Slider.next = function nextSlide(box) {
  const copiedBox = box;
  let max = 0;
  const sliderVisibleSize = document.querySelector('.blog-slider__slides')
    .clientWidth;
  copiedBox.slidesBox.style.transition = '0.3s ease-in-out';
  // checking wrapper size to prevent extra movement
  if (copiedBox.isMoreThanOneSlide) {
    if (sliderVisibleSize >= 1200) {
      max = copiedBox.slides.length - 3;
    } else if (sliderVisibleSize >= 800) {
      max = copiedBox.slides.length - 2;
    } else {
      max = copiedBox.slides.length - 1;
    }
  } else {
    max = copiedBox.slides.length - 1;
  }

  if (copiedBox.index < max) {
    copiedBox.index += 1;
  }

  if (copiedBox.isDotsRequired) {
    for (let i = 0; i < copiedBox.dots.length; i += 1) {
      copiedBox.dots[i].className = copiedBox.dots[i].className.replace(
        'slider__dot_active',
        ''
      );
    }
    copiedBox.dots[copiedBox.index].className += ' slider__dot_active';
  }

  copiedBox.slidesBox.style.transform = `translateX(${-copiedBox.slideSize *
    copiedBox.index}px)`;
};
