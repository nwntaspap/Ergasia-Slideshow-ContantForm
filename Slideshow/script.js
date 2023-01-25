// Select all slides
const slides = document.querySelectorAll(".slide");
// select next slide button
const nextSlide = document.querySelector(".next");
// select prev slide button
const prevSlide = document.querySelector(".prev")
// current slide counter
let currentSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
  
  //   move slide by -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });
  });

prevSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`
    })
});