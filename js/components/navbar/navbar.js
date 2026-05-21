// import { navbarData } from '/data/navbarData.js';

// export function loadNavbar() {

//   const header = document.querySelector('#header');


//   /* DESKTOP NORMAL LINKS */

//   const desktopLinks = navbarData

//     .filter(link =>
//       !link.mobileOnly &&
//       !link.dropdown
//     )

//     .map(link => {

//       const target = link.external
//         ? 'target="_blank" rel="noopener noreferrer"'
//         : '';

//       return `
//         <li>
//           <a href="${link.url}" ${target}>
//             ${link.name}
//           </a>
//         </li>
//       `;

//     })

//     .join('');


//   /*  BUILDS DROPDOWN */

//   const buildsItem = navbarData.find(
//     item => item.dropdown
//   );

//   const buildsDropdownHTML = buildsItem.children

//     .map(child => {

//       const target = child.external
//         ? 'target="_blank" rel="noopener noreferrer"'
//         : '';

//       return `
//         <a
//           href="${child.url}"
//           ${target}
//           class="dropdown-card"
//         >
//           <span class="dropdown-card-title">
//             ${child.name}
//           </span>
//           <span class="dropdown-card-description">
//             ${child.description}
//           </span>
//         </a>
//       `;

//     }).join('');


//   /*  MOBILE MAIN LINKS */

//   const mobileMainLinks = navbarData

//     .filter(link => !link.desktopOnly)

//     .map(link => {

//       const target = link.external
//         ? 'target="_blank" rel="noopener noreferrer"'
//         : '';

//       /* DROPDOWN LINK */
//       if (link.dropdown) {
//         return `
//           <li>
//             <button
//               class="submenu-trigger"
//               data-target="${link.name.toLowerCase()}-panel"
//             >
//               <span>${link.name}</span>
//               <span class="submenu-arrow">→</span>
//             </button>
//           </li>
//         `;
//       }

//       /* NORMAL LINK */
//       return `
//         <li>
//           <a href="${link.url}" ${target}>
//             ${link.name}
//           </a>
//         </li>
//       `;

//     }).join('');


//   /* MOBILE SUBMENUS */

//   const mobileSubmenus = navbarData

//     .filter(link => link.dropdown)

//     .map(link => {

//       const submenuLinks = link.children

//         .map(child => {

//           const target = child.external
//             ? 'target="_blank" rel="noopener noreferrer"'
//             : '';

//           return `
//             <li>
//               <a href="${child.url}" ${target}>
//                 ${child.name}
//               </a>
//             </li>
//           `;

//         })

//         .join('');

//       return `
//         <div
//           class="mobile-panel"
//           id="${link.name.toLowerCase()}-panel"
//         >
//           <!-- PANEL HEADER -->
//           <div class="mobile-panel-header">
//             <button class="back-button">← Back</button>
//             <div class="mobile-panel-info">
//               <p class="mobile-panel-title">
//                 ${link.dropdownCategoryText}
//               </p>
//               <p class="mobile-panel-description">
//                 ${link.dropdownCategoryTextDescription}
//               </p>
//             </div>
//           </div>

//           <!-- SUBMENU LINKS -->
//           <ul class="mobile-submenu-links">
//             ${submenuLinks}
//           </ul>
//         </div>
//       `;

//     })

//     .join('');


//   /* FINAL HEADER */
//   header.innerHTML =`

//     <!-- HEADER -->
//     <header class="site-header">

//       <div class="container">
//         <nav>

//           <!-- LOGO -->
//           <a href="/" class="logo">0xhemant</a>

//           <!-- DESKTOP NAV -->
//           <ul class="nav-links">
//             ${desktopLinks}

//             <!-- BUILDS DROPDOWN TRIGGER -->
//             <li class="dropdown-parent">
//               <a href="/builds/" class="dropdown-trigger">
//                 Builds
//               </a>
//             </li>
//           </ul>

//           <!-- MOBILE HAMBURGER -->
//           <div class="ham-menu">
//             <span></span>
//             <span></span>
//           </div>

//         </nav>
//       </div>

//       <!-- DESKTOP EXPANDING DROPDOWN -->
//       <div class="header-expand-area">
//         <div class="container">
//           <div class="dropdown-content">

//             <!-- DROPDOWN HEADER -->
//             <div class="dropdown-header">
//               <p class="dropdown-category-text">
//                 ${buildsItem.dropdownCategoryText}
//               </p>
//               <p class="dropdown-category-description">
//                 ${buildsItem.dropdownCategoryTextDescription}
//               </p>
//             </div>

//             <!-- DROPDOWN GRID -->
//             <div class="dropdown-grid">
//               ${buildsDropdownHTML}
//             </div>

//           </div>
//         </div>
//       </div>

//     </header>

//     <!-- MOBILE MENU (outside <header> so it can cover the full viewport) -->
//     <div class="mobile-menu">
//       <div class="mobile-panels">

//         <!-- MAIN PANEL -->
//         <div class="mobile-panel active" id="main-panel">
//           <ul class="mobile-main-links">
//             ${mobileMainLinks}
//           </ul>
//         </div>

//         <!-- SUBMENU PANELS -->
//         ${mobileSubmenus}

//       </div>
//     </div>

//   `;

//   setupMobileMenu();
//   setupDropdownMenu();
//   setActiveLink();
// }

// /* MOBILE MENU */

// function setupMobileMenu() {

//   const hamMenu    = document.querySelector('.ham-menu');
//   const mobileMenu = document.querySelector('.mobile-menu');

//   const siteHeader = document.querySelector('.site-header');

//   if (!hamMenu || !mobileMenu || !siteHeader) return;


//   /* OPEN / CLOSE TOGGLE */
//   hamMenu.addEventListener('click', () => {

//     hamMenu.classList.toggle('active');
//     mobileMenu.classList.toggle('active');

//     if (mobileMenu.classList.contains('active')) {
//       document.body.style.overflow = 'hidden';
//       siteHeader.classList.add('mobile-open');
//     } else {
//       document.body.style.overflow = '';
//       siteHeader.classList.remove('mobile-open');
//     }

//   });


//   /* CLOSE ON RESIZE TO DESKTOP */
//   window.addEventListener('resize', () => {

//     if (window.innerWidth >= 768) {
//       hamMenu.classList.remove('active');
//       mobileMenu.classList.remove('active');
//       document.body.style.overflow = '';
//       siteHeader.classList.remove('mobile-open');
//     }

//   });


//   /* SUBMENU TRIGGERS */

//   const submenuTriggers = document.querySelectorAll('.submenu-trigger');

//   submenuTriggers.forEach(trigger => {

//     trigger.addEventListener('click', () => {

//       const target = trigger.dataset.target;

//       // e.g. "builds-panel" → adds class "show-builds"
//       mobileMenu.classList.add(
//         `show-${target.replace('-panel', '')}`
//       );

//     });

//   });


//   /*  BACK BUTTONS */

//   const backButtons = document.querySelectorAll('.back-button');

//   backButtons.forEach(button => {

//     button.addEventListener('click', () => {

//       const activeShowClass = [...mobileMenu.classList]
//         .find(cls => cls.startsWith('show-'));

//       if (activeShowClass) {
//         mobileMenu.classList.remove(activeShowClass);
//       }

//     });

//   });

// }

// /* ACTIVE LINK */

// function setActiveLink() {

//   const currentPath = window.location.pathname;

//   const allLinks = document.querySelectorAll('a');

//   allLinks.forEach(link => {

//     if (link.getAttribute('href') === currentPath) {
//       link.classList.add('active-link');
//     }

//   });

// }

// /* DROPDOWN MENU */

// function setupDropdownMenu() {

//   const siteHeader    = document.querySelector('.site-header');
//   const dropdownParent = document.querySelector('.dropdown-parent');
//   const expandArea    = document.querySelector('.header-expand-area');
//   const overlay       = document.querySelector('.page-overlay');

//   if (!siteHeader || !dropdownParent || !expandArea || !overlay) return;


//   /* OPEN */
//   function openMenu() {

//     siteHeader.classList.add('expanded');

//     const handleTransitionEnd = () => {

//       const headerHeight = siteHeader.offsetHeight;

//       overlay.style.top    = `${headerHeight}px`;
//       overlay.style.height = `calc(100vh - ${headerHeight}px)`;

//       overlay.classList.add('active');

//       expandArea.removeEventListener('transitionend', handleTransitionEnd);

//     };

//     expandArea.addEventListener('transitionend', handleTransitionEnd);

//   }

//   /* CLOSE */
//   function closeMenu() {

//     siteHeader.classList.remove('expanded');
//     overlay.classList.remove('active');

//   }


//   /* OPEN EVENTS */
//   dropdownParent.addEventListener('mouseenter', openMenu);
//   expandArea.addEventListener('mouseenter', openMenu);


//   /* CLOSE EVENTS */
//   dropdownParent.addEventListener('mouseleave', () => {

//     setTimeout(() => {

//       if (
//         !dropdownParent.matches(':hover') &&
//         !expandArea.matches(':hover')
//       ) {
//         closeMenu();
//       }

//     }, 200);

//   });

//   expandArea.addEventListener('mouseleave', () => {

//     setTimeout(() => {

//       if (
//         !dropdownParent.matches(':hover') &&
//         !expandArea.matches(':hover')
//       ) {
//         closeMenu();
//       }

//     }, 40);

//   });

// }

import { renderNavbar } from './renderNavbar.js';

import { setupMobileMenu } from './setupMobileMenu.js';

import { setupDropdownMenu } from './setupDropdownMenu.js';

import { setActiveLink } from './setActiveLink.js';

import { setupStickyHeader } from './setupStickyHeader.js';


export function loadNavbar() {

  const header =
    document.querySelector('#header');


  if (!header) return;


  header.innerHTML =

  renderNavbar();

  setupMobileMenu();

  setupDropdownMenu();

  setupStickyHeader();

  setActiveLink();
  

}