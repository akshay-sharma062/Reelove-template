document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
  
    if (slides.length === 0) return; // Prevent further errors if no slides
  
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 20;
  
    next.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    });
  
    prev.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    });
  });
  