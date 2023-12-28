
let burger = document.querySelector('.burger');
let ulDesign = document.querySelector('.ulDesign');

burger.addEventListener('click', () => {
    ulDesign.classList.toggle('h-nav-resp');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Add smooth scrolling behavior
                block: 'start' // Scroll to the top of the target element
            });
        }
    });
});
