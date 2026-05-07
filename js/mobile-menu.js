const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');


// Event Listeners 

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');

  if (mobileMenu.classList.contains('active')) {

    document.body.style.overflow = 'hidden';

  } else {

    document.body.style.overflow = '';

  }
  
});

window.addEventListener('resize', () => {

  if (window.innerWidth >= 768) {

    mobileMenu.classList.remove('active');

    hamMenu.classList.remove('active');
  }
  

});

