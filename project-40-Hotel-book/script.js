document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const menuBtnIcon = menuBtn.querySelector('i');

    if (menuBtn && navLinks && menuBtnIcon) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');

            if (navLinks.classList.contains('hidden')) {
                menuBtnIcon.classList.remove('ri-close-line');
                menuBtnIcon.classList.add('ri-menu-line');
            } else {
                menuBtnIcon.classList.remove('ri-menu-line');
                menuBtnIcon.classList.add('ri-close-line');
            }
        });

        const allLinks = navLinks.querySelectorAll('a');
        allLinks.forEach(link => {
            link.addEventListener('click', () => {
                 if (window.innerWidth < 768) {
                    navLinks.classList.add('hidden');
                    navLinks.classList.remove('flex');
                    menuBtnIcon.classList.remove('ri-close-line');
                    menuBtnIcon.classList.add('ri-menu-line');
                }
            });
        });
    }

    // Optional: Basic smooth scroll (Tailwind doesn't handle this)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            const targetElement = hrefAttribute && hrefAttribute.length > 1 ? document.querySelector(hrefAttribute) : null;

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});