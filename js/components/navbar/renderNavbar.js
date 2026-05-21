import { renderDesktopNav } from './renderDesktopNav.js';

import { renderMobileMenu } from './renderMobileMenu.js';

export function renderNavbar() {

  return `

    <header class="site-header">

      ${renderDesktopNav()}

      

    </header>
    ${renderMobileMenu()}


  `;

}