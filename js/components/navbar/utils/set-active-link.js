import { normalizePath } from "/js/components/navbar/utils/normalize-path.js";

export function setActiveLink() {
  const currentPath = normalizePath(window.location.pathname);

  const allLinks = document.querySelectorAll(
    ".mobile-link, .mobile-submenu-link",
  );

  allLinks.forEach((link) => {
    link.classList.remove("active-link");

    const linkPath = normalizePath(link.getAttribute("href"));

    if (linkPath === currentPath) {
      link.classList.add("active-link");
    }
  });
}
