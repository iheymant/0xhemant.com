import { renderNavbar } from "/js/components/navbar/renderNavbar.js";

import { setupMobileMenu } from "/js/components/navbar/mobileBar/setupMobileMenu.js";

import { setupDropdownMenu } from "/js/components/navbar/deskBar/setupDropdownMenu.js";

import { setActiveLink } from "/js/components/navbar/utils/setActiveLink.js";

import { setupStickyHeader } from "/js/components/navbar/utils/setupStickyHeader.js";

export function loadNavbar() {
  const header = document.querySelector("#header");

  if (!header) return;

  header.innerHTML = renderNavbar();

  setupMobileMenu();

  setupDropdownMenu();

  setupStickyHeader();

  setActiveLink();
}
