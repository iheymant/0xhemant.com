import { renderDropdownTrigger } from "./renderDropdownTrigger.js";
import { renderNavLinks } from "./renderNavlinks.js";


export function renderDesktopNav() {

  return `

    <div class="container">

      <nav class="desktop-nav">

        <a href="/" class="logo">

          0xhemant

        </a>


        <ul class="nav-links">

          ${renderNavLinks()}

        </ul>

      </nav>

    </div>

  `;

}