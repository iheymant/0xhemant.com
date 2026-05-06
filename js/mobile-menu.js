const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');


// Event Listeners 

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  
});

window.addEventListener('resize', () => {

  if (window.innerWidth >= 768) {

    mobileMenu.classList.remove('active');

    hamMenu.classList.remove('active');
  }

});