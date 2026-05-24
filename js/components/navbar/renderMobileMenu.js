import {
  renderMobileMainLinks
} from './renderMobileMainLinks.js';

import {
  renderMobileSubmenus
} from './renderMobileSubmenus.js';



export function renderMobileMenu() {

  return`

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