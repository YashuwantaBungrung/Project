// script.js

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.getAttribute('data-index'));
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});
