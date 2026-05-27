import { navbarData } from "/data/navbarData.js";

import { renderDropdownMenu } from "/js/components/navbar/deskBar/renderDropdownMenu.js";

export function renderMegaMenus() {
  return navbarData

    .filter((link) => link.dropdown)

    .map((link) => {
      return renderDropdownMenu(link);
    })

    .join("");
}
