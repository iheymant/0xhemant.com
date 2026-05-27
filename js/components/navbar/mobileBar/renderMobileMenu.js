import { renderMobileMainLinks } from "/js/components/navbar/mobileBar/renderMobileMainLinks.js";

import { renderMobileSubmenus } from "/js/components/navbar/mobileBar/renderMobileSubmenus.js";

export function renderMobileMenu() {
  return `

  <div class="mobile-menu">

    <div class="mobile-panels">


      <!-- MAIN PANEL -->

      <div
        class="
          mobile-panel
          mobile-root-panel
         active
          "
        id="main-panel"
      >

        ${renderMobileMainLinks()}

      </div>


      <!-- SUBMENUS -->

      ${renderMobileSubmenus()}

    </div>

  </div>

    `;
}
