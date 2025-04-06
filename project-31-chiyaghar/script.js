document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.getElementById('hamburger-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const openMenu = () => {
      if (mobileMenu && hamburgerButton) {
          mobileMenu.classList.remove('hidden');
          hamburgerButton.setAttribute('aria-expanded', 'true');
      }
  };

  const closeMenu = () => {
      if (mobileMenu && hamburgerButton) {
          mobileMenu.classList.add('hidden');
          hamburgerButton.setAttribute('aria-expanded', 'false');
      }
  };

  if (hamburgerButton && mobileMenu) {
      hamburgerButton.addEventListener('click', openMenu);
  } else {
      console.error("Hamburger button or mobile menu element not found!");
  }

  if (closeMenuButton && mobileMenu) {
      closeMenuButton.addEventListener('click', closeMenu);

      document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
              closeMenu();
          }
      });

  } else {
       console.error("Close menu button or mobile menu element not found!");
  }
});

/* about us page */
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.getElementById('hamburger-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = mobileMenu ? mobileMenu.querySelectorAll('nav a') : []; // Get links inside mobile menu

  const openMenu = () => {
      if (mobileMenu && hamburgerButton) {
          mobileMenu.classList.remove('hidden');
          hamburgerButton.setAttribute('aria-expanded', 'true');
      }
  };

  const closeMenu = () => {
      if (mobileMenu && hamburgerButton) {
          mobileMenu.classList.add('hidden');
          hamburgerButton.setAttribute('aria-expanded', 'false');
      }
  };

  // Hamburger button opens menu
  if (hamburgerButton && mobileMenu) {
      hamburgerButton.addEventListener('click', openMenu);
  } else {
      console.error("Hamburger button or mobile menu element not found!");
  }

  // Close button closes menu
  if (closeMenuButton && mobileMenu) {
      closeMenuButton.addEventListener('click', closeMenu);

      // Close menu on Escape key press
      document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
              closeMenu();
          }
      });

  } else {
       console.error("Close menu button or mobile menu element not found!");
  }

  // Close mobile menu when a link inside it is clicked (useful for single-page navigation)
  mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
          // Only close if it's likely an internal link (#)
          if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
              closeMenu();
          }
          // Add logic here if you have links navigating *away* from the page
          // and don't want the menu to close immediately.
      });
  });
});