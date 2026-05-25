import { navbarData } from "/data/navbarData.js";

import { renderNavLink } from "./renderNavLink.js";

import { renderDropdownTrigger } from "./renderDropdownTrigger.js";

export function renderNavLinks() {
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
