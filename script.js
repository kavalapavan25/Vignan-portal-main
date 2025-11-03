document.addEventListener('DOMContentLoaded', (event) => {

    // --- 1. Mobile "Hamburger" Menu ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active'); // For 'X' animation
        });
    }

    // --- 2. Scroll-Reveal Animation ---
    
    // Select all elements you want to animate
    const hiddenElements = document.querySelectorAll('.hidden');

    // Set up the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When the element is in view, add the 'show' class
                entry.target.classList.add('show');
            } else {
                // Optional: Remove 'show' to re-animate every time
                // entry.target.classList.remove('show'); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Tell the observer to watch each hidden element
    hiddenElements.forEach((el) => observer.observe(el));

});