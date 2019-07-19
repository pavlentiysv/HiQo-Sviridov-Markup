(function() {
  let index = 0;
  const slideSize = document.querySelector('.posts__item').clientWidth;
  document.querySelector('.slider__arrow_left.blog-arrow').style.display =
    'none';

  function blogSlider() {
    this.box = document.getElementsByClassName('blog-slider__slides');
    this.slidesBox = document.querySelector('.posts');
    this.slides = document.getElementsByClassName('posts__item');
    this.arrows = document.getElementsByClassName('blog-arrow');

    this.carousel();
  }

  blogSlider.prototype.carousel = function() {
    max = this.arrows.length;
    that = this;

    for (let i = 0; i < max; i++) {
      that.arrows[i].addEventListener(
        'click',
        blogSlider[that.arrows[i].id].bind(null, that)
      );
    }
  };

  blogSlider.previous = function(box) {
    box.slidesBox.style.transition = '0.3s ease-in-out';
    index <= 0 ? false : index--;
    index <= 0
      ? (box.arrows[0].style.display = 'none')
      : (box.arrows[1].style.display = 'block');
    box.slidesBox.style.transform = 'translateX(' + -slideSize * index + 'px)';
  };

  blogSlider.next = function(box) {
    const sliderVisibleSize = document.querySelector('.blog-slider__slides')
      .clientWidth;
    box.slidesBox.style.transition = '0.3s ease-in-out';
    // checking wrapper size to prevent extra movement
    sliderVisibleSize >= 1200
      ? (max = box.slides.length - 3)
      : sliderVisibleSize >= 800
      ? (max = box.slides.length - 2)
      : (max = box.slides.length - 1);

    index >= max ? false : index++;

    index >= max
      ? (box.arrows[1].style.display = 'none')
      : (box.arrows[0].style.display = 'block');
    box.slidesBox.style.transform = 'translateX(' + -slideSize * index + 'px)';
  };

  new blogSlider();
})();
