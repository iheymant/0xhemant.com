import { renderDesktopNav } from "/js/components/navbar/desktop-navbar/render-desktop-nav.js";

import { renderMobileMenu } from "/js/components/navbar/mobile-navbar/render-mobile-menu.js";

import { renderMegaMenus } from "/js/components/navbar/desktop-navbar/render-mega-menus.js";

export function renderNavbar() {
  return `

    <header class="site-header">

      <div class="reading-progress"></div>

      <div class = "navbar-content">

      <div class="container">

        ${renderDesktopNav()}

      </div>


      <div class="mega-menu-layer">

        ${renderMegaMenus()}
      
      </div>

    </div>

    </header>

        <button class="ham-menu">

          <span></span>
          <span></span>

        </button>

      ${renderMobileMenu()}

      
      

  `;
}
