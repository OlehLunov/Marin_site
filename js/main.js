/*review slider*/
window.onload = function() {
    var sliderContainer = document.querySelector(".slider-container");
    var reviews = document.querySelectorAll(".reviews__item");
    var slideWidth = reviews[0].offsetWidth;
    var slideInterval;

    // Добавление обработчиков событий на кнопки-стрелки
    var prevButton = document.querySelector(".slider-control-prev");
    prevButton.addEventListener("click", prevSlide);

    var nextButton = document.querySelector(".slider-control-next");
    nextButton.addEventListener("click", nextSlide);

    // Запуск автоматического переключения слайдов
    startSlideShow();

    function prevSlide() {
        sliderContainer.style.transition = "none";
        sliderContainer.style.transform = `translateX(${-slideWidth}px)`;

        // Перемещение последнего слайда перед первым
        var lastSlide = reviews[reviews.length - 1];
        sliderContainer.insertBefore(lastSlide, reviews[0]);

        // Добавление задержки перед анимацией
        setTimeout(function() {
            sliderContainer.style.transition = "transform 0.5s ease";
            sliderContainer.style.transform = "translateX(0)";
        }, 10);
    }

    function nextSlide() {
        sliderContainer.style.transition = "transform 0.5s ease";
        sliderContainer.style.transform = `translateX(${-slideWidth}px)`;

        // Перемещение первого слайда после последнего
        var firstSlide = reviews[0];
        sliderContainer.appendChild(firstSlide);

        // Добавление задержки перед анимацией
        setTimeout(function() {
            sliderContainer.style.transition = "none";
            sliderContainer.style.transform = "translateX(0)";
        }, 500);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 10000);
    }
};
/*review slider*/


