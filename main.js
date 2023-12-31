const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let index = 0;

function updateSlider() {
  slider.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
}
