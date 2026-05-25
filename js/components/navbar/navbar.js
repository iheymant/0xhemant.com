import { renderNavbar } from "./renderNavbar.js";

import { setupMobileMenu } from "./mobileBar/setupMobileMenu.js";

import { setupDropdownMenu } from "./deskBar/setupDropdownMenu.js";

import { setActiveLink } from "./utils/setActiveLink.js";

import { setupStickyHeader } from "./utils/setupStickyHeader.js";

export function loadNavbar() {
  const header = document.querySelector("#header");

  if (!header) return;

  header.innerHTML = renderNavbar();

  setupMobileMenu();

  setupDropdownMenu();

  setupStickyHeader();

  setActiveLink();
}
