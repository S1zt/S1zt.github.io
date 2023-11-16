document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
});
