document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Change background color of the navbar on scroll
        if (scrollPosition > 50) {
            navbar.style.backgroundColor = '#555';
        } else {
            navbar.style.backgroundColor = '#333';
        }

        // Highlight the current section in the navbar
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 70;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const currentNavItem = document.querySelector(`nav ul li:nth-child(${index + 1}) a`);
                currentNavItem.style.color = '#ffcc00';
            } else {
                const otherNavItem = document.querySelector(`nav ul li:nth-child(${index + 1}) a`);
                otherNavItem.style.color = '#fff';
            }
        });
    });
});
