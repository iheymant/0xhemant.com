import { checkNavlinksType } from "/js/components/navbar/desktop-navbar/check-navlinks-type.js";

export function renderDesktopNav() {
  return`

  <nav class="desktop-nav">

    <a
      href="/"
      class="navbar-brand"
    >

      <img
        src="/assets/branding/logo/logo-512-primary-25.svg"
        alt="0xhemant"
        class="navbar-logo "
      >

    </a>




    <ul class="nav-links">

      ${checkNavlinksType()}

    </ul>




  </nav>


    `;
}
