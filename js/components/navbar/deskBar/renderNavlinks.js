import { navbarData } from "/data/navbarData.js";

import { renderNavLink } from "/js/components/navbar/deskBar/renderNavlink.js";

import { renderDropdownTrigger } from "/js/components/navbar/deskBar/renderDropdownTrigger.js";

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
