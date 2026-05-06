const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');


// Event Listeners 

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});