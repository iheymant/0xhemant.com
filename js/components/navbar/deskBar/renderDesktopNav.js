import { renderNavLinks } from "./renderNavlinks.js";

export function renderDesktopNav() {
  return `

    <nav class="desktop-nav">

      <a href="/" class="logo">

        0xhemant

      </a>


      <ul class="nav-links">

        ${renderNavLinks()}

      </ul>


      

      </nav>


  `;
}
