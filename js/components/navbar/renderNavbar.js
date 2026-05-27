import { renderDesktopNav } from "/js/components/navbar/deskBar/renderDesktopNav.js";

import { renderMobileMenu } from "/js/components/navbar/mobileBar/renderMobileMenu.js";

import { renderMegaMenus } from "/js/components/navbar/deskBar/renderMegaMenus.js";

export function renderNavbar() {
  return `

    <header class="site-header">

      <div class="container">

        ${renderDesktopNav()}

      </div>


      <div class="mega-menu-layer">

        ${renderMegaMenus()}
      
      </div>

    </header>

        <button class="ham-menu">

          <span></span>
          <span></span>

        </button>

      ${renderMobileMenu()}
      

  `;
}
