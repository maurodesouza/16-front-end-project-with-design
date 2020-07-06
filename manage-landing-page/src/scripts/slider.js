import debounce from './debounce';

class Slider {
  constructor() {
    this.slider = document.querySelector('.slider');
    this.sliderWrapper = document.querySelector('.slider-wrapper');

    this.sliderItems = this.sliderItemsConfig();
    this.navItems = document.querySelectorAll('.slider-nav');

    this.finalPosition = 0;
    this.initialXPosition = 0;
    this.currentPosition = 0

    this.currentSlider = 1;
    this.prevSlider = 0;
    this.nextSlider = 2;

    this.threshold = 50;

    this.getClientX = {
      mousedown: ({ clientX }) => clientX,
      mousemove: ({ clientX }) => clientX,

      touchstart: ({ changedTouches : [first] }) => first.clientX,
      touchmove: ({ changedTouches : [first] }) => first.clientX,
    }

    this.init();
  }

  transition(active) {
    this.sliderWrapper.style.transition = active ? 'transform .3s' : '';
  }

  start = e => {
    if (e.cancelable) {
      e.preventDefault();
      e.stopPropagation();
    }
  
    this.initialXPosition = this.getClientX[e.type](e);

    this.transition(false);
    ['mousemove', 'touchmove'].forEach(event => this.slider.addEventListener(event, this.onMove));
  }

  onMove = e => {
    if (e.cancelable) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.movement = this.calculateMovement(this.getClientX[e.type](e));
    const moveTo = this.finalPosition - this.movement;

    this.moveSlide(moveTo);
  }

  calculateMovement = (clientX, accelerate = 1.6) => (this.initialXPosition - clientX) * accelerate;

  moveSlide = value => {
    this.currentPosition = value;
    this.sliderWrapper.style.transform = `translateX(${value}px)`;
  }

  end = () => {
    this.finalPosition = this.currentPosition;
  
    ['mousemove', 'touchmove'].forEach(event =>
      this.slider.removeEventListener(event, this.onMove));
  
    if (this.movement < -this.threshold && this.prevSlider !== null) this.changeSlide(this.prevSlider);

    else if (this.movement > this.threshold && this.nextSlider !== null) this.changeSlide(this.nextSlider);

    else this.changeSlide(this.currentSlider);
  }

  changeSlide = index => {
    const offset = this.sliderItems[index].offsetToCentralize;

    this.transition(true);

    this.moveSlide(offset);
    this.finalPosition = offset;
  
    this.setCurrentSlider(index);
  }

  setCurrentSlider = index => {
    this.navItems.forEach((nav, i) => 
      i === index ? nav.classList.add('current') : nav.classList.remove('current'));

    this.currentSlider = index;
    this.nextSlider = this.sliderItems[index + 1] ? index + 1 : null;
    this.prevSlider = this.sliderItems[index - 1] ? index - 1 : null;
  }

  onResize = () => {
    this.sliderItemsConfig();
    this.changeSlide(this.currentSlider);
  }

  addEvents = () => {
    ['mousedown', 'touchstart'].forEach(event =>
      this.slider.addEventListener(event, this.start));

    ['mouseup', 'touchend'].forEach(event =>
      this.slider.addEventListener(event, this.end));

    this.navItems.forEach((nav, index) =>
      nav.addEventListener('touchstart', () => this.changeSlide(index)))

    window.addEventListener('resize', debounce(this.onResize));
  }

  sliderItemsConfig = () => {
    this.sliderItems = [...this.sliderWrapper.children].map(slide => {
      const margin = (this.sliderWrapper.offsetWidth - slide.offsetWidth) / 2;
      const offsetToCentralize = (slide.offsetLeft - margin) * -1;

      return { slide, offsetToCentralize };
    });
  }

  init = () => {
    this.addEvents();

    this.sliderItemsConfig();
    this.changeSlide(this.currentSlider);
  }
}

new Slider();
