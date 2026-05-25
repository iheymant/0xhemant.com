import { renderDesktopNav } from "./deskBar/renderDesktopNav.js";

import { renderMobileMenu } from "./mobileBar/renderMobileMenu.js";

import { renderMegaMenus } from "./deskBar/renderMegaMenus.js";

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
