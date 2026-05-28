import { navbarData } from "/data/navbar-data.js";

import { renderNavLink } from "/js/components/navbar/desktop-navbar/render-navlink.js";

import { renderDropdownTrigger } from "/js/components/navbar/desktop-navbar/render-dropdown-trigger.js";

export function checkNavlinksType() {
  return navbarData

    .filter((link) => {
      return !link.mobileOnly;
    })

    .map((link) => {
      if (link.dropdown) {
        return renderDropdownTrigger(link);
      }

      return renderNavLink(link);
    })

    .join("");
}
