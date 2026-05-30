import { navbarData } from "/data/navigation/navbar-data.js";

import { renderDropdownMenu } from "/js/components/navbar/desktop-navbar/render-dropdown-menu.js";

export function renderMegaMenus() {
  return navbarData

    .filter((link) => link.dropdown)

    .map((link) => {
      return renderDropdownMenu(link);
    })

    .join("");
}
