const hamburgerButton = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('menu');
    
    hamburgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });