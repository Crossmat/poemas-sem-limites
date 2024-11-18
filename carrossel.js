let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicators button');
    indicators.forEach((button, i) => {
        button.classList.toggle('active', i === currentIndex);
    });
}