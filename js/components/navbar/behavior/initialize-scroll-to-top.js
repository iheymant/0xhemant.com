export function initializeScrollToTop() {
  const navbar = document.querySelector(".navbar-content");

  if (!navbar) return;

  navbar.addEventListener("click", () => {
    if (event.target.closest(".ham-menu")) return;

    if (event.target.closest(".nav-link")) return;

    if (event.target.closest(".mega-menu-trigger")) return;

    if (window.scrollY < 200) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
