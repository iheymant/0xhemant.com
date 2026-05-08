import { navbarData } from '../data/navbarData.js';

export function loadNavbar() {

  const header = document.querySelector('#header');

  const desktopLinks = navbarData
    .filter(link => !link.mobileOnly)
    .map(link => {

      const target = link.external
        ? 'target="_blank" rel="noopener noreferrer"'
        : '';

      return `
        <li>
          <a href="${link.url}" ${target}>
            ${link.name}
          </a>
        </li>
      `;

    })
    .join('');


  const mobileLinks = navbarData
    .filter(link => !link.desktopOnly)
    .map(link => {

      const target = link.external
        ? 'target="_blank" rel="noopener noreferrer"'
        : '';

      return `
        <li>
          <a href="${link.url}" ${target}>
            ${link.name}
          </a>
        </li>
      `;

    })
    .join('');


  header.innerHTML = `

    <header class="site-header">

      <div class="container">

        <nav>

          <a href="/" class="logo">
            0xhemant
          </a>

          <ul class="nav-links">
            ${desktopLinks}
          </ul>

          <div class="ham-menu">
            <span></span>
            <span></span>
          </div>

        </nav>

      </div>


      <div class="mobile-menu">
        <ul>
          ${mobileLinks}
        </ul>
      </div>

    </header>

  `;


  setupMobileMenu();
  setActiveLink();
}

function setupMobileMenu() {

  const hamMenu = document.querySelector('.ham-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!hamMenu || !mobileMenu) return;


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

      hamMenu.classList.remove('active');
      mobileMenu.classList.remove('active');

      document.body.style.overflow = '';
    }

  });
}

function setActiveLink() {

  const currentPath = window.location.pathname;

  const allLinks = document.querySelectorAll('a');


  allLinks.forEach(link => {

    const href = link.getAttribute('href');

    if (href === currentPath) {
      link.classList.add('active-link');
    }

  });
}