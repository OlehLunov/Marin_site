/*слайдер*/

var slides = document.querySelectorAll('.reviews__item .reviews__item2 .reviews__item3');
var currentSlide=0;

function showSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
}
slides[currentSlide].classList.add('active');

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

function previousSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide();
}

showSlide();

