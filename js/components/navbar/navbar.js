import { renderNavbar } from "/js/components/navbar/render-navbar.js";

import { setupMobileMenu } from "/js/components/navbar/mobile-navbar/setup-mobile-menu.js";

import { setupDropdownMenu } from "/js/components/navbar/desktop-navbar/setup-dropdown-menu.js";

import { setActiveLink } from "/js/components/navbar/utils/set-active-link.js";

import { setupStickyHeader } from "/js/components/navbar/utils/setup-sticky-header.js";

export function loadNavbar() {
  const header = document.querySelector("#header");

  if (!header) return;

  header.innerHTML = renderNavbar();

  setupMobileMenu();

  setupDropdownMenu();

  setupStickyHeader();

  setActiveLink();
}
