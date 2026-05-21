export function setActiveLink() {

  const currentPath = window.location.pathname;

  const allLinks = document.querySelectorAll('a');

  allLinks.forEach(link => {

    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active-link');
    }

  });

}