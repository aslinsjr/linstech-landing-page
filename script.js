const slides = document.querySelectorAll(".banner");
let slideIndex = 0;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
  
    slideIndex++;
  
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  
    slides[slideIndex - 1].classList.add("active");
  
    setTimeout(showSlides, 4000);
  }

  showSlides()