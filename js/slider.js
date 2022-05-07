const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let dots = document.querySelectorAll('.dots-item'),
  dotsArea = document.querySelector('.dots-block');
let count = 0;
let width;

function init() {
  //console.log('resize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}
var timer = 0;
makeTimer(); //Создаем интервал 
function makeTimer() {
  clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
  timer = setInterval(function() {
    scrollSlide(1);
    rollSlider(count);
  }, 5000);
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', () => scrollSlide(1));

document.querySelector('.slider-prev').addEventListener('click', () => scrollSlide(-1));

dots.forEach((dot, index) => dot.addEventListener('click', () => setSlide(index)));

function scrollSlide(direction) {
  count = (count + direction + images.length) % images.length;
  moveSlide();
}

function setSlide(index) {
  count = index;
  moveSlide();
}

function moveSlide() {  
  document.querySelector('.dots-item.active').classList.remove('active');
  document.querySelectorAll('.dots-item')[count].classList.add('active');
  
  rollSlider();
  makeTimer();
}

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}