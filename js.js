const navLinks = document.querySelectorAll('.nav-links li');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const target = event.target.getAttribute('href');
        const targetElement = document.querySelector(target);

        if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop
            });
        }
    });
});
