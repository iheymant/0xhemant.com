import { checkNavlinksType } from "/js/components/navbar/desktop-navbar/check-navlinks-type.js";

export function renderDesktopNav() {
  return `

    <nav class="desktop-nav">

      <a href="/" class="logo">

        0xhemant

      </a>


      <ul class="nav-links">

        ${checkNavlinksType()}

      </ul>


      

      </nav>


  `;
}
