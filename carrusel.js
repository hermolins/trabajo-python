
document.addEventListener('DOMContentLoaded', function () {
    const columns = document.querySelectorAll('.column');
  
    columns.forEach(column => {
      let currentSlide = 0;
      const slides = column.querySelectorAll('.carousel-item');
      const totalSlides = slides.length;
      const nextBtn = column.querySelector('.next-btn');
      const prevBtn = column.querySelector('.prev-btn');
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'block' : 'none';
        });
      }
  
      function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
      }
  
      function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
      }
  
      showSlide(currentSlide);
  
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
    });
  });
  
