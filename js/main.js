
window.onload = function() {
    var sliderContainer = document.querySelector(".slider-container");
    var reviews = document.querySelectorAll(".reviews__item");
    var slideWidth = reviews[0].offsetWidth;
    var slideInterval;

    var prevButton = document.querySelector(".slider-control-prev");
    prevButton.addEventListener("click", prevSlide);

    var nextButton = document.querySelector(".slider-control-next");
    nextButton.addEventListener("click", nextSlide);


    startSlideShow();

    function prevSlide() {
        sliderContainer.style.transition = "none";
        sliderContainer.style.transform = `translateX(${-slideWidth}px)`;

        var lastSlide = reviews[reviews.length - 1];
        sliderContainer.insertBefore(lastSlide, reviews[0]);


        setTimeout(function() {
            sliderContainer.style.transition = "transform 0.5s ease";
            sliderContainer.style.transform = "translateX(0)";
        }, 10);
    }

    function nextSlide() {
        sliderContainer.style.transition = "transform 0.5s ease";
        sliderContainer.style.transform = `translateX(${-slideWidth}px)`;

        var firstSlide = reviews[0];
        sliderContainer.appendChild(firstSlide);

        setTimeout(function() {
            sliderContainer.style.transition = "none";
            sliderContainer.style.transform = "translateX(0)";
        }, 500);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 10000);
    }
};


var summaries = document.querySelectorAll(".questions__details-summary");

summaries.forEach(function(summary) {
    summary.addEventListener("click", function() {
        summary.classList.toggle("open");

        if (summary.classList.contains("open")) {
            summary.style.color = "#2D5E5E";
        } else {
            summary.style.color = "black";
        }
    });
});

