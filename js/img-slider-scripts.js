// Slides
const eachSlides = document.querySelectorAll('.slider');
// Slider btns
const slideNextBtn = document.querySelector('.btn-next')
const slidePrevBtn = document.querySelector('.btn-prev')

let currentSlide = 0; // What slide user is on
let maxSlide = eachSlides.length - 1; // Max Slides

/* Event Listeners
============================================================================================= */
// The following moves the slides depending on which button user clicks
// Next
slideNextBtn.addEventListener('click', () => {
    if (currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    // move each slide by 100% * by currentSlide
    eachSlides.forEach((slide, index) => { 
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
})

// Prev
slidePrevBtn.addEventListener('click', () => {
    if (currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }

    // move each slide by 100% * by currentSlide
    eachSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
})

// For each img in slider, move 100% or it would stack on top of each other
eachSlides.forEach((e, index) => {
    e.style.transform = `translateX(${index * 100}%)`;
})