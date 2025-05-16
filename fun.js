// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Select the navigation icon and the header element from the DOM
  const hamburgerButton = document.getElementById('hamburger-button');
  const header = document.querySelector('header');

  // Add a click event listener to the navigation icon to toggle classes for opening the menu
  hamburgerButton.addEventListener('click', function () {
    this.classList.toggle('open');
    header.classList.toggle('nav-active');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
  });
});
