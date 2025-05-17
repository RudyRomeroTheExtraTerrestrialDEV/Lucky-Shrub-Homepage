// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Select the navigation icon and the header element from the DOM
  const hamburgerButton = document.getElementById('hamburger-button');
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');

  function toggleMenu() {
    this.classList.toggle('open');
    header.classList.toggle('nav-active');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
  }

  function closeMenu() {
    hamburgerButton.classList.remove('open');
    header.classList.remove('nav-active');
    hamburgerButton.setAttribute('aria-expanded', 'false');
  }

  // Add a click event listener to the navigation icon to toggle classes for opening the menu
  hamburgerButton.addEventListener('click', toggleMenu);
  nav.addEventListener('click', closeMenu);
});
